import { handlerSuccess, handlerError } from '../utils/api.utils.js';
import { entityInstance } from '../entity/entityInstance.js';
import log from 'loglevel';

log.setLevel('info');

export async function listAllRolesHandler(event) {
  log.info('Executing listAllSystems function');
  const entity = await entityInstance();
  const featureInstance = entity.getIntance();
  log.info('Executing search in listAllSystems');
  return featureInstance
    .listAllRoles()
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

export async function createRoleHandler(event) {
  log.info('Executing createRoleHandler function');
  const entity = await entityInstance();
  const roleDTO = JSON.parse(event.body);
  const featureInstance = entity.getIntance();
  return featureInstance
    .insertRole(roleDTO)
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}
