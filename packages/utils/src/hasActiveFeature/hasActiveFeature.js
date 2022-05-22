/**
 * @param {string} feature
 */
export const hasActiveFeature = feature => toggles => {
  return toggles.filter(toggle => {
    const haveName = toggle.name === feature;
    const isActive = toggle.isActive === true;
    return haveName && isActive;
  });
}
