/**
 * @param {string} system
 */
export const hasSystem = system => toggles => {
  return toggles.filter(toggle => {
    return toggle.systems.some(s => s === system)
  });
}
