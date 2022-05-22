import log from 'loglevel';
import { hasSystem } from '../hasSystem/hasSystem.js';

export const fromSystem = (system) => {
  log.info('Running fromSystem');
  log.debug(system);
  let toggles = [];
  let validators = () => false;
  return {
    setToggles: (t) => {
      log.info('Running setToggles from fromSystem');
      log.debug(t);
      toggles = t;
    },
    setValidators: (v) => {
      log.info('Running setValidators from fromSystem');
      log.debug(v);
      validators = v
    },
    validate: () => {
      log.info('Running validate from fromSystem');
      const togglesFromSystem = hasSystem(system)(toggles);
      log.debug(togglesFromSystem);
      return validators(togglesFromSystem)
    },
  };
}
