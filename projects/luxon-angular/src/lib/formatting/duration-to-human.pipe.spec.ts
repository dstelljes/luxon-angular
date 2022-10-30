import { Duration } from 'luxon';
import { DurationToHumanPipe } from './duration-to-human.pipe';

describe('DurationToHumanPipe', () => {
  const pipe = new DurationToHumanPipe();

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();
    });

    it('transforms a Duration into a human-readable string representation', () => {
      expect(pipe.transform(Duration.fromISO('P2Y4M6D')))
        .toBe('2 years, 4 months, 6 days');
    });
  });
});
