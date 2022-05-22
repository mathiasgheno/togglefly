/**
 *
 * @param {string} feature
 */
export const hasFeature = feature => toggles => {
  return toggles.filter(toggle => {
    return toggle.name === feature;
  });
}
