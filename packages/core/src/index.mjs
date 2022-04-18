export { DynamoDBEntity } from './DynamoDBEntity/DynamoDBEntity.mjs';
export {
  generateUpdateConfigs,
  getMarshallDefaultConfig,
  getUnmarshallDefaultConfig,
  generateDefaultConnectionConfig,
  generateDefaultCreateTableConfig,
} from './DynamoDBUtil/DynamoDBUtil.mjs';
export { getDynamoInstance } from './DynamoDBInstance/DynamoDBInstance.mjs';
export { DynamoDBConfig } from './DynamoDBConfig/DynamoDBConfig.mjs';

console.log('hello from @togglefly/core');
