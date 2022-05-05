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
