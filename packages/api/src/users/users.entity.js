import { DynamoDBEntity } from '@togglefly/core';

export const usersEntityFactory = async function () {
  const entity = new DynamoDBEntity('users');
  await entity.createTable();
  return {
    getIntance: function() {
      return entity;
    }
  };
};
