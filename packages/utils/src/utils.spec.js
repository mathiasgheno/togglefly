import { pipe, hasRole } from './utils.js';

describe('@togglefly/utils', () => {
  let toggles;

  beforeEach(() => {
    toggles = [
      {
        name: 'TOGGLE_INSERT_TEST',
        description: 'Toggle de testes',
        isActive: true,
        systems: ['S#1', 'S#2'],
        allowedRoles: ['R#1', 'R#2'],
      }
    ];
  })

  describe('hasRole', () => {
    it('should return true for R#1', () => {
      const hasAccess = pipe(
        hasRole('R#1'),
      );
      expect(hasAccess(toggles)).toEqual(true);
    });

    it('should return false for R#3', () => {
      const hasAccess = pipe(
        hasRole('R#3'),
      );
      expect(hasAccess(toggles)).toEqual(false);
    });
  })
})
