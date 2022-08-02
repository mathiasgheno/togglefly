/**
 * @type {IToggle[]}
 */
export const mockToggles = Object.freeze([
  {
    name: 'TOGGLE_INSERT_TEST',
    description: 'Toggle de testes',
    isActive: true,
    systems: ['S#1', 'S#2'],
    allowedRoles: ['R#1', 'R#2'],
  },
  {
    name: 'TOGGLE_INSERT_TEST_2',
    description: 'Toggle de testes',
    isActive: false,
    systems: [],
    allowedRoles: [],
  }
]);
