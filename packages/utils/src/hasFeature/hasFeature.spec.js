import { hasFeature } from './hasFeature.js';
import { mockToggles } from '../toggles.mock.js';
import { pipe } from '../pipe/index.js';

describe('hasFeature', () => {
  it('should return true for TOGGLE_INSERT_TEST', () => {
    const isActivated = pipe(
      hasFeature('TOGGLE_INSERT_TEST'),
    );
    expect(isActivated(mockToggles)).toEqual(true);
  });

  it('should return true for TOGGLE_INSERT_TEST_2', () => {
    const isActivated = pipe(
      hasFeature('TOGGLE_INSERT_TEST_2'),
    );
    expect(isActivated(mockToggles)).toEqual(true);
  });

  it('should return false for TOGGLE_BAZ', () => {
    const isActivated = pipe(
      hasFeature('TOGGLE_BAZ'),
    );
    expect(isActivated(mockToggles)).toEqual(false);
  });
})
