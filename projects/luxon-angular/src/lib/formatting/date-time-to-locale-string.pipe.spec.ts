import { DateTime, LocaleOptions } from 'luxon';
import { DateTimeToLocaleStringPipe } from './date-time-to-locale-string.pipe';

describe('dateTimeToLocaleString', () => {
  const format = DateTime.DATETIME_FULL;
  const localeOptions: LocaleOptions = {locale: 'en-US'}
  const pipe = new DateTimeToLocaleStringPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null, format, localeOptions)).toBeNull();
      expect(pipe.transform(undefined, format, localeOptions)).toBeNull();
    });

    it('transforms a DateTime into an arbitrarily formatted string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00'), format, localeOptions))
        .toBe("January 2, 2006 at 11:04 PM GMT+1");
    });
  });
});