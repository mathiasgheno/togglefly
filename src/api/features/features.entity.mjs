import { DynamoDBEntity } from '../../common/DynamoDBEntity';

export const featuresEntityFactory = async function () {
  const entity = new DynamoDBEntity('features');
  await entity.createTable();
  return {
    getIntance: function() {
      return entity;
    }
  };
};
