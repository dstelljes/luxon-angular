import { Duration } from 'luxon';
import { DurationFromIsoPipe } from './duration-from-iso.pipe';

describe('DurationFromIsoPipe', () => {
  const pipe = new DurationFromIsoPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms an ISO 8601 string into a Duration', () => {
      const result = pipe.transform('P2Y4M6D');

      expect(result).toBeInstanceOf(Duration);
      expect(result.isValid).toBe(true);
    });

    it('transforms an incorrectly formatted string into an invalid DateTime', () => {
      const result = pipe.transform('two years, four months, six days');

      expect(result).toBeInstanceOf(Duration);
      expect(result.isValid).toBe(false);
    });
  });
});
