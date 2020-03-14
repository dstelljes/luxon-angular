import { DateTime } from 'luxon';
import { DateTimeToLocalPipe } from './date-time-to-local.pipe';

describe('DateTimeToLocalPipe', () => {
  const pipe = new DateTimeToLocalPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a UTC DateTime to local', () => {
      const result = pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00').toUTC());
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      expect(result.zoneName).toBe(zone);
    });
  });
});
