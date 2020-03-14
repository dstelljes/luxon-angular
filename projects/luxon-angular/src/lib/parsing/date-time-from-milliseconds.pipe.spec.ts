import { DateTime } from 'luxon';
import { DateTimeFromMillisecondsPipe } from './date-time-from-milliseconds.pipe';

describe('DateTimeFromMillisecondsPipe', () => {
  const pipe = new DateTimeFromMillisecondsPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms epoch milliseconds into a DateTime', () => {
      const result = pipe.transform(1136239445000);

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(true);
    });
  });
});
