import { mockToggles } from '../toggles.mock.js';
import { pipe } from '../pipe/index.js';
import { hasRole } from './hasRole.js';

describe('hasRole', () => {
  it('should return true for R#1', () => {
    const hasAccess = pipe(
      hasRole('R#1'),
    );
    expect(hasAccess(mockToggles)).toEqual(true);
  });

  it('should return false for R#3', () => {
    const hasAccess = pipe(
      hasRole('R#3'),
    );
    expect(hasAccess(mockToggles)).toEqual(false);
  });
});
