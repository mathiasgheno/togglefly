import log from 'loglevel';

/**
 * @param filters
 * @returns {function(*): boolean}
 */
export const pipe = (...filters) => {
  const reducer = (acc, fn) => {
    return fn(acc);
  };

  return toggles => {
    log.debug(`Receiving from pipe: ${JSON.stringify(toggles)}`);
    const finalResult = filters.reduce(reducer, toggles);
    log.debug(`Final result of pipe: ${JSON.stringify(finalResult)}`);
    return finalResult?.length > 0;
  }
}
