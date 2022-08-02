/**
 * @param {string} feature
 */
export const hasActiveFeature = feature => {
  /**
   * @param {IToggle[]} toggles
   * @returns {IToggle[]}
   */
  const _curry = toggles => {
    return toggles.filter(toggle => {
      const haveName = toggle.name === feature;
      const isActive = toggle.isActive === true;
      return haveName && isActive;
    });
  }
  return _curry;
}
