import { generateDefaultConnectionConfig, generateDefaultCreateTableConfig } from '../DynamoDBUtil/DynamoDBUtil.mjs';
import { getDynamoInstance } from '../DynamoDBInstance/DynamoDBInstance.mjs';
import { ListTablesCommand, CreateTableCommand } from '@aws-sdk/client-dynamodb'

export class DynamoDBConfig {
  constructor(TableName, dynamoConfigs = {}) {
    this.TableName = TableName;
    this.connectionConfigs = generateDefaultConnectionConfig(dynamoConfigs);
    this.paginationLimit = 5;
  }

  /**
   * @param paginationLimit
   * @description
   *
   * Change the default pagination limit.
   * This change will affect `listAll` method.
   *
   */
  setPaginationLimit(paginationLimit) {
    this.paginationLimit = paginationLimit;
  }

  /**
   * @description
   * Set property `endpoint` to local then you can run your project locally.
   */
  setLocalEnvironment() {
    this.connectionConfigs = {
      ...this.connectionConfigs,
      endpoint: 'localhost:8000',
    }
  }

  /**
   * @description
   * This is going to list all tables for one region.
   * @returns {Promise<string[]|void>}
   */
  listAllTables() {
    const { connectionConfigs } = this;
    const { client: dynamo } = getDynamoInstance(connectionConfigs);
    const command = new ListTablesCommand({});
    return dynamo
      .send(command)
      .then(result => result && result.TableNames)
      .finally(() => dynamo.destroy());
  }

  /**
   * @description
   * This is going to verify if a table already exists.
   * If not, this is going to create it.
   * @returns {Promise<string[]|undefined|void>}
   */
  createTable() {
    const { TableName, connectionConfigs } = this;
    const createTableConfigs = generateDefaultCreateTableConfig(TableName);
    const { client: dynamo } = getDynamoInstance(connectionConfigs);
    const createTable = new CreateTableCommand(createTableConfigs);

    return this.listAllTables()
      .then(tables => (
        tables.some(table => table === TableName)
          ? tables
          : dynamo
            .send(createTable)
            .then(() => this.listAllTables())
      ))
      .finally(() => dynamo.destroy());
  }
}
