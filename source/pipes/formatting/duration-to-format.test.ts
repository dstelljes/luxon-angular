import { Duration } from 'luxon'
import { DurationToFormatPipe } from './duration-to-format'

describe('DurationToFormatPipe', () => {
  const pipe = new DurationToFormatPipe()

  describe('#transform', () => {
    it('transforms a Duration into an arbitrarily formatted string', () => {
      expect(pipe.transform(Duration.fromISO('P2Y4M6D'), "d 'days', M 'months', y 'years'"))
        .toBe('6 days, 4 months, 2 years')
    })
  })
})
