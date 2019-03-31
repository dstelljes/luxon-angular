import { Duration } from 'luxon'
import { DurationToIsoPipe } from './duration-to-iso'

describe('DurationToIsoPipe', () => {
  const pipe = new DurationToIsoPipe()

  describe('#transform', () => {
    it('transforms a Duration into an ISO 8601 string', () => {
      expect(pipe.transform(Duration.fromISO('P2Y4M6D')))
        .toBe('P2Y4M6D')
    })
  })
})
