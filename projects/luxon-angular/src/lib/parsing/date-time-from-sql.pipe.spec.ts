import { DateTime } from 'luxon';
import { DateTimeFromSqlPipe } from './date-time-from-sql.pipe';

describe('DateTimeFromSqlPipe', () => {
  const pipe = new DateTimeFromSqlPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms an SQL-formatted date string into a DateTime', () => {
      const result = pipe.transform('2006-01-02 15:04:05 -07:00');

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(true);
    });

    it('transforms an incorrectly formatted string into an invalid DateTime', () => {
      const result = pipe.transform('January 2, 2006');

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(false);
    });
  });
});
