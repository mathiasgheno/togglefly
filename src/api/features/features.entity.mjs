import { DynamoDBEntity } from '../../common/DynamoDBEntity';
import log from 'loglevel';

export const featuresEntityFactory = async function () {
  const ENTITY = 'features';

  log.info(`Creating table of entity ${ENTITY}.`);

  const entity = new DynamoDBEntity('features');
  await entity.createTable();

  log.info(`Everyhing ok with entity ${ENTITY}.`);

  return {
    getIntance: function() {
      return entity;
    }
  };
};
