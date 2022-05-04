export { DynamoDBEntity } from './DynamoDB/DynamoDBEntity/DynamoDBEntity.js';
export {
  generateUpdateConfigs,
  getMarshallDefaultConfig,
  getUnmarshallDefaultConfig,
  generateDefaultConnectionConfig,
  generateDefaultCreateTableConfig,
} from './DynamoDB/DynamoDBUtil/DynamoDBUtil.js';
export { getDynamoInstance } from './DynamoDB/DynamoDBInstance/DynamoDBInstance.js';
export { DynamoDBConfig } from './DynamoDB/DynamoDBConfig/DynamoDBConfig.js';

console.log('hello from @togglefly/core');
