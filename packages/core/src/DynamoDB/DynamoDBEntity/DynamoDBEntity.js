import { v4 } from 'uuid';
import { DeleteItemCommand, GetItemCommand, ScanCommand, UpdateItemCommand } from '@aws-sdk/client-dynamodb';
import { getDynamoInstance } from '../DynamoDBInstance/DynamoDBInstance.js';
import { generateUpdateConfigs } from '../DynamoDBUtil/DynamoDBUtil.js';
import { DynamoDBConfig } from '../DynamoDBConfig/DynamoDBConfig.js';

export class DynamoDBEntity extends DynamoDBConfig {
  constructor(TableName, dynamoConfigs = {}) {
    super(TableName, dynamoConfigs);
    this.updateConfigsFn = generateUpdateConfigs(TableName);
  }

  search(objectDocument) {
    const { connectionConfigs, TableName } = this;
    const { client: dynamo, marshall, unmarshall } = getDynamoInstance(connectionConfigs);
    const Key = marshall(objectDocument);
    const command = new GetItemCommand({ TableName, Key })
    return dynamo
      .send(command)
      .then((result) => (
        result.Item
          ? unmarshall(result.Item)
          : undefined
      ))
      .finally(() => dynamo.destroy());
  }

  insert(objectDocument) {
    const { connectionConfigs, TableName } = this;
    const { client: dynamo } = getDynamoInstance(connectionConfigs);
    const Key = v4();
    const Item = {
      id: Key,
      ...objectDocument,
    }
    return dynamo
      .put({ TableName, Item })
      .then(() => this.search({ id: Key }))
      .finally(() => dynamo.destroy());
  }

  remove(objectDocument) {
    const { connectionConfigs, TableName } = this;
    const { client: dynamo, marshall } = getDynamoInstance(connectionConfigs);
    const Key = marshall(objectDocument);
    const command = new DeleteItemCommand({ TableName, Key });
    return this.search(objectDocument)
      .then((result) => (
        result
          ? dynamo.send(command)
          : undefined
      ))
      .finally(() => dynamo.destroy());
  }

  update(objectDocument) {
    const { connectionConfigs, updateConfigsFn } = this;
    const { client: dynamo } = getDynamoInstance(connectionConfigs);
    const { id } = objectDocument;
    const command = new UpdateItemCommand(updateConfigsFn(objectDocument));
    return this.search({ id })
      .then((result) => (
        result
          ? dynamo.send(command)
          : undefined
      ))
      .then((result) => result && this.search({ id }))
      .finally(() => dynamo.destroy());
  }

  listAll(lastKey) {
    const { connectionConfigs, TableName } = this;
    const { client: dynamo, unmarshall, marshall } = getDynamoInstance(connectionConfigs);
    const command = new ScanCommand({
      TableName,
      Limit: this.paginationLimit,
      ExclusiveStartKey: lastKey
        ? marshall({ id: lastKey })
        : undefined
    })
    return dynamo
      .send(command)
      .then(result => result.Items.map(item => unmarshall(item)))
      .finally(() => dynamo.destroy());
  }
}
