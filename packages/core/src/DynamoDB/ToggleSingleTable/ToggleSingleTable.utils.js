/**
 * @typedef IToggle
 * @property {string} id
 * @property {string[]} allowedRoles
 * @property {string[]} systems
 * @property {string} name
 * @property {string} description
 */

/**
 * @typedef IFeatureTable
 * @property {string} pk
 * @property {string} sk
 * @property {string} name
 * @property {string} description
 * @property {string[]} allowedRoles
 * @property {string[]} systems
 */

/**
 * @param {IFeatureTable} feature
 * @returns IToggle
 */
export const toggleDTO = (feature) => {
  return {
    id: feature.pk,
    allowedRoles: feature.allowedRoles || [],
    systems: feature.systems || [],
    name: feature.name,
    description: feature.description
  };
}

/**
 * @typedef ISystemTable
 * @property {string} pk
 * @property {string} sk
 * @property {string} entityType
 * @property {string} name
 * @property {string} description
 */

/**
 * @typedef ISystem
 * @property {string} id
 * @property {string} name
 * @property {string} description
 */

/**
 * @param {ISystemTable} systemTable
 * @returns ISystem
 */
export function systemsDTO(systemTable) {
  return {
    id: systemTable.name,
    description: systemTable.description,
    name: systemTable.name,
  }
}

/**
 * @typedef IRole
 * @property {string} id
 * @property {string} name
 * @property {string} description
 */

/**
 * @typedef ISystemTable
 * @property {string} pk
 * @property {string} sk
 * @property {string} name
 * @property {string} entityType
 * @property {string} description
 */

/**
 * @param {ISystemTable} roleTable
 * @returns IRole
 */
export function rolesDTO(roleTable) {
  return {
    id: roleTable.pk,
    name: roleTable.name,
    description: roleTable.description,
  }
}
