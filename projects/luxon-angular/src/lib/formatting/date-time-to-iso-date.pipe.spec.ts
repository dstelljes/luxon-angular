import { DateTime } from 'luxon';
import { DateTimeToIsoDatePipe } from './date-time-to-iso-date.pipe';

describe('DateTimeToIsoDatePipe', () => {
  const pipe = new DateTimeToIsoDatePipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a DateTime into an ISO 8601 string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00')))
        .toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});
