import { DynamoDBConfig, getDynamoInstance } from '../index.js';
import { ScanCommand } from '@aws-sdk/client-dynamodb';
import { featureDTO } from './FeatureSingleTable.utils.js';
import log from 'loglevel';

export class FeaturesSingleTableEntity extends DynamoDBConfig {
  constructor(TableName, dynamoConfigs = {}) {
    super(TableName, dynamoConfigs);
    this.prefixFeature = 'F#';
    this.prefixSystem = 'S#';
    this.prefixRole = 'R#'
  }

  /**
   * @typedef ISingleTableQuery
   * @property {String} pk
   * @property {String} sk
   */

  /**
   * @param lastKey
   * @param {ISingleTableQuery} filters
   * @returns {Promise<[]>}
   */
  scan(lastKey, { pk, sk }) {
    log.info('Executing scan function');
    const { connectionConfigs, TableName } = this;
    const { client: dynamo, unmarshall, marshall } = getDynamoInstance(connectionConfigs);
    const command = new ScanCommand({
      TableName,
      FilterExpression: 'begins_with(pk, :pk) and begins_with(sk, :sk)',
      ExpressionAttributeValues: marshall({
        ":pk": pk,
        ":sk": sk,
      }),
      // Limit: this.paginationLimit,
      ExclusiveStartKey: lastKey
        ? marshall({ id: lastKey })
        : undefined
    });
    log.info(`Executing scan with pk ${pk}`);
    log.info(`Executing scan with sk ${sk}`);
    return dynamo
      .send(command)
      .then(result => result.Items.map(item => unmarshall(item)))
      .finally(() => dynamo.destroy());
  }

  async listAll(lastKey) {
    log.info('Executing list function');
    const features = await this.scan(lastKey, {
      pk: this.prefixFeature,
      sk: this.prefixFeature,
    });
    log.debug({ features });
    log.info('Making requests of roles and systems');
    for await (let feature of features) {
      const roles = await this.#listAllRolesOfFeature(feature.pk);
      const systems = await this.#listAllSystemsOfFeature(feature.pk);
      log.debug({ roles });
      log.debug({ systems });
      feature.allowedRoles = roles;
      feature.systems = systems;
    }
    log.info('Finished requests for roles and systems');
    log.debug({ features });
    return features.map(featureDTO);
  }

  getRoleDetails(rolePk) {
    const filters = {
      pk: rolePk,
      sk: rolePk,
    };
    return this.scan(undefined, filters)
      .then(roles => roles[0]);
  }

  getSystemDetails(systemPk) {
    const filters = {
      pk: systemPk,
      sk: systemPk,
    };
    return this.scan(undefined, filters)
      .then(roles => roles[0]);
  }

  /**
   * @private
   * @param {String} feature
   * @returns {Promise<String[]>}
   */
  async #listAllRolesOfFeature(feature) {
    log.info('Executing listRoles function.');
    const roles = await this.scan(undefined, {
      pk: feature,
      sk: this.prefixRole,
    });
    log.debug({ roles });
    log.info('Making request for role datails.');
    for await (let role of roles) {
      const roleDatails = await this.getRoleDetails(role.sk);
      role.name = roleDatails.name;
    }
    log.debug({ roles });
    log.info('Mapping resulting of roles.');
    return roles.map(({ name }) => name);
  }

  /**
   * @private
   * @param {String} feature
   * @returns {Promise<String[]>}
   */
  async #listAllSystemsOfFeature(feature) {
    log.info('Executing listSystems function');
    const filters = {
      pk: feature,
      sk: this.prefixSystem,
    };
    const systems = await this.scan(undefined, filters);
    log.debug({ systems });
    for (let system of systems) {
      const systemDetails = await this.getSystemDetails(system.sk);
      log.debug({ systemDetails });
      system.name = systemDetails.name;
    }
    log.debug({ systems });
    return systems.map(({ name }) => name);
  }

  /**
   * @todo
   * @param RoleName
   */
  findAllFeaturesOfRole(RoleName) {

  }

  /**
   * todo
   */
  findAllFeaturesOfSystem() {

  }
}
