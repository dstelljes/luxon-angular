import { DateTime } from 'luxon';
import { DateTimeToSqlPipe } from './date-time-to-sql.pipe';

describe('DateTimeToSqlPipe', () => {
  const pipe = new DateTimeToSqlPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a DateTime into an SQL-formatted date string', () => {
      expect(pipe.transform(DateTime.fromSQL('2006-01-02 15:04:05 -07:00')))
        .toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} [+-]\d{2}:\d{2}$/);
    });
  });
});
