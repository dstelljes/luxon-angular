import { Duration } from 'luxon';
import { DurationToIsoPipe } from './duration-to-iso.pipe';

describe('DurationToIsoPipe', () => {
  const pipe = new DurationToIsoPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a Duration into an ISO 8601 string', () => {
      expect(pipe.transform(Duration.fromISO('P2Y4M6D')))
        .toBe('P2Y4M6D');
    });
  });
});
