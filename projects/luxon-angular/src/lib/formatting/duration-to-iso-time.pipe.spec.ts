import { Duration } from 'luxon';
import { DurationToIsoTimePipe } from './duration-to-iso-time.pipe';

describe('DurationToIsoTimePipe', () => {
  const pipe = new DurationToIsoTimePipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a Duration into an ISO 8601 time string', () => {
      expect(pipe.transform(Duration.fromISO('PT12H24M36S')))
        .toBe('12:24:36.000');
    });
  });
});
