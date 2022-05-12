import log from 'loglevel';

log.setLevel('info');

/**
 * @param {string} role
 */
export const hasRole = role => toggles => {
  log.info('Running hasRole');
  log.debug(`Receive those toggles: ${JSON.stringify(toggles)}`);
  const resultToggles = toggles.filter(toggle => {
    return toggle.allowedRoles.some(r => r === role)
  });
  log.debug(`Result from hasRole to next pipe: ${JSON.stringify(resultToggles)}`);
  return resultToggles;
}

/**
 * @param {string} system
 */
export const hasSystem = system => toggles => {
  return toggles.filter(toggle => {
    return toggle.systems.some(s => s === system)
  });
}

/**
 * @param {string} feature
 */
export const hasActiveFeature = feature => toggles => {
  return toggles.filter(toggle => {
    const haveName = toggle.name === feature;
    const isActive = toggle.isActive = true;
    return haveName && isActive;
  });
}

/**
 *
 * @param {string} feature
 */
export const hasFeature = feature => toggles => {
  return toggles.filter(toggle => {
    return toggle.name === feature;
  });
}

/**
 * @param filters
 * @returns {function(*): boolean}
 */
export const pipe = (...filters) => {
  return toggles => {
    log.debug(`Receiving from pipe: ${JSON.stringify(toggles)}`);
    const finalResult = filters.reduce(
      (acc, fn) => {
        return fn(acc);
      },
      toggles
    );
    log.debug(`Final result of pipe: ${JSON.stringify(finalResult)}`);
    return finalResult?.length > 0;
  }
}
