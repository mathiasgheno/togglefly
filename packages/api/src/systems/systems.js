import { handlerSuccess, handlerError } from '../utils/api.utils.js';
import { entityInstance } from '../entity/entityInstance.js';
import log from 'loglevel';

log.setLevel('info');

export async function listAllSystemsHandler(event) {
  log.info('Executing listAllSystems function');
  const entity = await entityInstance();
  const featureInstance = entity.getIntance();
  log.info('Executing search in listAllSystems');
  return featureInstance
    .listAllSystems()
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

export async function createSystemHandler(event) {
  log.info('Executing createRoleHandler function');
  const entity = await entityInstance();
  const systemDTO = JSON.parse(event.body);
  const featureInstance = entity.getIntance();
  return featureInstance
    .insertSystem(systemDTO)
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}
