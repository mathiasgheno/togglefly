export {
  getFeatureHandler,
  updateFeatureHandle,
  createFeatureHandler,
  deleteFeatureHandler,
  listAllFeaturesHandler,
} from './features/features.js';
export {
  listAllSystemsHandler,
  createSystemHandler,
} from './systems/systems.js';
export {
  listAllRolesHandler,
  createRoleHandler,
} from './roles/roles.js';

// import { listAllFeaturesHandler }from './features/features.js'

console.log('hello from @togglefly/api');

// listAllFeaturesHandler().then(console.log);
