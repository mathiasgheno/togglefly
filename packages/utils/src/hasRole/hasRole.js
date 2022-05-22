import log from 'loglevel';

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
