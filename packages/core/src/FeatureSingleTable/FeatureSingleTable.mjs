import { DynamoDBConfig, getDynamoInstance } from '../index.mjs';
import { ScanCommand } from '@aws-sdk/client-dynamodb/dist-es';
import log from 'loglevel';

class FeaturesSingleTableEntity extends DynamoDBConfig {
  constructor(TableName, dynamoConfigs = {}) {
    super(TableName, dynamoConfigs);
    this.prefixFeature = 'F#';
    this.prefixSystem = 'S#';
    this.prefixRole = 'R#'
  }

  scan(lastKey, { pk, sk }) {
    log.info('Executing scan function');
    const { connectionConfigs, TableName } = this;
    const { client: dynamo, unmarshall, marshall } = getDynamoInstance(connectionConfigs);
    const command = new ScanCommand({
      TableName,
      FilterExpression: `begins_with(pk, :pk) and begins_with(sk, :sk)`,
      ExpressionAttributeValues: marshall({
        ":pk": pk,
        ":sk": sk,
      }),
      Limit: this.paginationLimit,
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

  list(lastKey) {
    log.info('Executing list function');
    return this.scan(lastKey, {
      pk: this.prefixFeature,
      sk: this.prefixFeature,
    });
  }

  listRoles(lastKey) {
    log.info('Executing listRoles function');
    return this.scan(lastKey, {
      pk: this.prefixFeature,
      sk: this.prefixRole,
    });
  }

  listSystems(lastKey) {
    log.info('Executing listSystems function');
    return this.scan(lastKey, {
      pk: this.prefixFeature,
      sk: this.prefixSystem,
    });
  }

  findAllFeaturesOfRole(RoleName) {

  }
}

// const featuresSingleTable = new FeaturesSingleTableEntity('featuregt');
// await featuresSingleTable.createTable();
// console.log(await featuresSingleTable.list());
// console.log(await featuresSingleTable.listRoles());
// console.log(await featuresSingleTable.listSystems());
//
// console.log('worked');
