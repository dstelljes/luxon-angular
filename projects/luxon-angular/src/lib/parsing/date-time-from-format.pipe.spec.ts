import { DateTime } from 'luxon';
import { DateTimeFromFormatPipe } from './date-time-from-format.pipe';

describe('DateTimeFromFormatPipe', () => {
  const format = 'dd LLL yyyy';
  const pipe = new DateTimeFromFormatPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null, format)).toBeNull();
      expect(pipe.transform(undefined, format)).toBeNull();
    });

    it('transforms an arbitrarily formatted string into a DateTime', () => {
      const result = pipe.transform('02 Jan 2006', format);

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(true);
    });

    it('transforms a string that doesn\'t fit the provided format into an invalid DateTime', () => {
      const result = pipe.transform('January 2, 2006', format);

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(false);
    });
  });
});
