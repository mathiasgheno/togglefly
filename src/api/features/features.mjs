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

export async function listAllFeaturesHandler(event) {
  log.info('Executing createFeatureHandler function');
  const entity = await featuresEntityFactory();
  const featureInstance = entity.getIntance();
  return featureInstance
    .listAll()
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

export async function updateFeatureHandle(event) {
  const id = event.pathParameters.id;
  if(!id) {
    return {
      statusCode: 502,
      body: {
        message: 'You should send an ID',
      }
    }
  }
  let { body } = event;
  if(!body) {
    return {
      statusCode: 502,
      body: {
        message: 'You should provide an body',
      }
    }
  }

  body = JSON.parse(body);
  const objectDocument = {...body, id};

  log.info('Executing updateFeatureHandle function');
  const entity = await featuresEntityFactory();
  const featureInstance = entity.getIntance();
  return featureInstance
    .update(objectDocument)
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

export async function deleteFeatureHandler(event) {
  const id = event.pathParameters.id;
  if(!id) {
    return {
      statusCode: 502,
      body: {
        message: 'You should send an ID',
      }
    }
  }
  log.info('Executing deleteFeatureHandler function');
  const entity = await featuresEntityFactory();
  const featureInstance = entity.getIntance();
  return featureInstance
    .remove({ id })
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

export async function getFeatureHandler(event) {
  const id = event.pathParameters.id;
  if(!id) {
    return {
      statusCode: 502,
      body: {
        message: 'You should send an ID',
      }
    }
  }
  log.info('Executing getFeature function');
  const entity = await featuresEntityFactory();
  const featureInstance = entity.getIntance();
  return featureInstance
    .search({ id })
    .then(handlerSuccess(event))
    .catch(handlerError(event))
}

// listAllFeaturesHandler().then(console.log);
// getFeature({params: {id: 'bla'}}).then(console.log);
