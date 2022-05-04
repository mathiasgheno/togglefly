/**
 * @typedef IToggle
 * @property {string} id
 * @property {string[]} allowedRoles
 * @property {string[]} systems
 * @property {string} name
 * @property {string} description
 */

/**
 * @param feature
 * @returns IToggle
 */
export const toggleDTO = (feature) => {
  return {
    id: feature.pk,
    allowedRoles: feature.allowedRoles,
    systems: feature.systems,
    name: feature.name,
    description: feature.description,
    // roles: feature.roles, //TODO
  };
}
