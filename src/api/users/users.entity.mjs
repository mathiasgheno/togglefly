import { DynamoDBEntity } from '../../common/DynamoDBEntity/index.mjs';

export const usersEntityFactory = async function () {
  const entity = new DynamoDBEntity('users');
  await entity.createTable();
  return {
    getIntance: function() {
      return entity;
    }
  };
};
