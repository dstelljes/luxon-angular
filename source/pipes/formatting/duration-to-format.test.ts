import { Duration } from 'luxon'
import { DurationToFormatPipe } from './duration-to-format'

describe('DurationToFormatPipe', () => {
  const format = "d 'days', M 'months', y 'years'"
  const pipe = new DurationToFormatPipe()

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null, format)).toBeNull()
      expect(pipe.transform(undefined, format)).toBeNull()
    })

    it('transforms a Duration into an arbitrarily formatted string', () => {
      expect(pipe.transform(Duration.fromISO('P2Y4M6D'), format))
        .toBe('6 days, 4 months, 2 years')
    })
  })
})
