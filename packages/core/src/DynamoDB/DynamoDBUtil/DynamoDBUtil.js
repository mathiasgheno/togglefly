import { marshall } from '@aws-sdk/util-dynamodb';

export function generateDefaultCreateTableConfig(TableName) {
  return {
    TableName,
    AttributeDefinitions: [
      {
        AttributeName: 'pk',
        AttributeType: 'S',
      },
      {
        AttributeName: 'sk',
        AttributeType: 'S',
      }
    ],
    KeySchema: [
      {
        AttributeName: 'pk',
        KeyType: 'HASH',
      },
      {
        AttributeName: 'sk',
        KeyType: "RANGE"
      }
    ],
    ProvisionedThroughput: {
      ReadCapacityUnits: 1,
      WriteCapacityUnits: 1,
    }
  }
}

export function generateDefaultConnectionConfig(dynamoDBConnection = {}) {
 return {
   region: 'sa-east-1',
   // endpoint: undefined,
   endpoint: 'http://localhost:8000',
   ...dynamoDBConnection
 }
}

export function getMarshallDefaultConfig() {
  return {
    convertEmptyValues: true,
    removeUndefinedValues: true,
    convertClassInstanceToMap: true,
  }
}

export function getUnmarshallDefaultConfig() {
  return {
    // Whether to return numbers as a string instead of converting them to native JavaScript numbers.
    wrapNumbers: false, // false, by default.
  }
}

export function generateUpdateConfigs(TableName) {
  // see: https://stackoverflow.com/a/66036730/7892749
  return function (todo) {
    const { id, ...restToUpdate } = todo;
    const itemKeys = Object.keys(restToUpdate);
    const Key = marshall(todo);

    const UpdateExpression = `SET ${itemKeys.map((k, index) => `#field${index} = :value${index}`).join(', ')}`;

    const ExpressionAttributeNames = itemKeys.reduce((accumulator, k, index) => ({
      ...accumulator,
      [`#field${index}`]: k,
    }), {});

    const ExpressionAttributeValues = marshall(itemKeys.reduce((accumulator, k, index) => ({
      ...accumulator,
      [`:value${index}`]: restToUpdate[k]
    }), {}));

    return {
      TableName,
      Key,
      ReturnValues: 'ALL_NEW',
      UpdateExpression,
      ExpressionAttributeNames,
      ExpressionAttributeValues,
    }
  }
}
