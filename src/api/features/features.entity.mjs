import { DynamoDBEntity } from '../../common/DynamoDBEntity/index.mjs';
import log from 'loglevel';

export const featuresEntityFactory = async function () {
  const ENTITY = 'features';

  log.info(`Executing featuresEntityFactory`);

  const entity = new DynamoDBEntity('features');
  await entity.createTable();

  log.info(`Everyhing ok with entity ${ENTITY}.`);

  return {
    getIntance: function() {
      return entity;
    }
  };
};
