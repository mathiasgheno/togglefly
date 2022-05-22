import { pipe } from '../pipe/index.js';
import { mockToggles } from '../toggles.mock.js';
import { hasSystem } from './hasSystem.js';

describe('hasSystem', () => {
  it('should return true for S#1', () => {
    const isActivated = pipe(
      hasSystem('S#1'),
    );
    expect(isActivated(mockToggles)).toEqual(true);
  });

  it('should reutrn false for S#4', () => {
    const isActivated = pipe(
      hasSystem('S#4'),
    );
    expect(isActivated(mockToggles)).toEqual(false);
  });
});
