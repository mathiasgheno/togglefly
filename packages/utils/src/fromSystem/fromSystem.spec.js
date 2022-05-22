import { fromSystem } from './fromSystem.js';
import { pipe } from '../pipe/pipe.js';
import { hasActiveFeature } from '../hasActiveFeature/index.js';
import { mockToggles } from '../toggles.mock.js';

describe('fromSystem', () => {
  it('should return true for system S#1 and actived feature TOGGLE_INSERT_TEST', () => {
    const validators = pipe(
      hasActiveFeature('TOGGLE_INSERT_TEST')
    );

    const isActivatedFromSystem = fromSystem('S#1');
    isActivatedFromSystem.setToggles(mockToggles);
    isActivatedFromSystem.setValidators(validators);
    expect(isActivatedFromSystem.validate()).toEqual(true);
  });

  it('should return false for system S#1 and actived feature TOGGLE_INSERT_TEST_2', () => {
    const validators = pipe(
      hasActiveFeature('TOGGLE_INSERT_TEST_2')
    );

    const isActivatedFromSystem = fromSystem('S#1');
    isActivatedFromSystem.setToggles(mockToggles);
    isActivatedFromSystem.setValidators(validators);
    expect(isActivatedFromSystem.validate()).toEqual(false);
  });
});
