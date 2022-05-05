import { FeaturesSingleTableEntity } from '@togglefly/core';
import log from 'loglevel';

export const entityInstance = async function () {
  const ENTITY = 'features';

  log.info(`Executing featuresEntityFactory`);

  const entity = new FeaturesSingleTableEntity('features');
  await entity.createTable();

  log.info(`Everyhing ok with entity ${ENTITY}.`);

  return {
    getIntance: function() {
      return entity;
    }
  };
};
