import { Duration } from 'luxon';
import { DurationFromIsoTimePipe } from './duration-from-iso-time.pipe';

describe('DurationFromIsoTimePipe', () => {
  const pipe = new DurationFromIsoTimePipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms an ISO 8601 time string into a Duration', () => {
      const result = pipe.transform('00:05:00');

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
