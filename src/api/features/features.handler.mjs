import { handlerSuccess, handlerError } from '../utils/api.utils.mjs';
import { featuresEntityFactory } from './features.entity.mjs';
import log from 'loglevel';

log.setLevel('info');

export async function createFeatureHandler(event) {
  log.info('Executing createFeatureHandler function');
  const featureDTO = JSON.parse(event.body);
  const entity = await featuresEntityFactory();
  const featureInstance = entity.getIntance();
  log.info('Executing insert in createFeatureHandler');
  return featureInstance
    .insert(featureDTO)
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}
