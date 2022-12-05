import { DateTime, LocaleOptions } from 'luxon';
import { DateTimeToLocaleStringPipe } from './date-time-to-locale-string.pipe';

describe('dateTimeToLocaleString', () => {
  const date = new Date('2006-01-02T15:04:05-07:00')
  const dateTime = DateTime.fromJSDate(date);
  const format = DateTime.DATETIME_SHORT_WITH_SECONDS;
  const pipe = new DateTimeToLocaleStringPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null, format)).toBeNull();
      expect(pipe.transform(undefined, format)).toBeNull();
    });

    it('transforms an input with empty format into a localized string using the system locale', () => {
      expect(pipe.transform(dateTime, null)).toBe(date.toLocaleDateString());
      expect(pipe.transform(dateTime, undefined)).toBe(date.toLocaleDateString());
    });

    it('transforms a DateTime into an arbitrarily formatted string', () => {
      expect(pipe.transform(dateTime, format))
        .toBe(date.toLocaleString());
    });
  });
});