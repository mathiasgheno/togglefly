import { hasActiveFeature } from './hasActiveFeature.js';
import { mockToggles } from '../toggles.mock.js';
import { pipe } from '../pipe/index.js';

describe('hasActiveFeature', () => {
  it('should return true for TOGGLE_INSERT_TEST', () => {
    const isActivated = pipe(
      hasActiveFeature('TOGGLE_INSERT_TEST'),
    );
    expect(isActivated(mockToggles)).toEqual(true);
  });

  it('should return false for TOGGLE_INSERT_TEST_2', () => {
    const isActivated = pipe(
      hasActiveFeature('TOGGLE_INSERT_TEST_2'),
    );
    expect(isActivated(mockToggles)).toEqual(false);
  });
});
