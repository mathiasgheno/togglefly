export { DynamoDBEntity } from './DynamoDBEntity/DynamoDBEntity.js';
export {
  generateUpdateConfigs,
  getMarshallDefaultConfig,
  getUnmarshallDefaultConfig,
  generateDefaultConnectionConfig,
  generateDefaultCreateTableConfig,
} from './DynamoDBUtil/DynamoDBUtil.js';
export { getDynamoInstance } from './DynamoDBInstance/DynamoDBInstance.js';
export { DynamoDBConfig } from './DynamoDBConfig/DynamoDBConfig.js';

console.log('hello from @togglefly/core');
