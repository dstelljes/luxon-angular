import { Duration } from 'luxon';
import { DurationShortestPipe } from './duration-shortest.pipe';

describe('DurationShortestPipe', () => {
  const pipe = new DurationShortestPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms an empty list of Durations into undefined', () => {
      expect(pipe.transform([])).toBeUndefined();
    });

    it('transforms a non-empty list of Durations into the minimum of that list', () => {
      const result = pipe.transform([
        Duration.fromMillis(50),
        Duration.fromMillis(100),
        Duration.fromMillis(-30),
        Duration.fromMillis(0)
      ]);

      expect(result.milliseconds).toBe(-30);
    });
  });
});
