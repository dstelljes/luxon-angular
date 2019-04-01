import { DateTime } from 'luxon'
import { DateTimeToRelativePipe } from './date-time-to-relative'

describe('DateTimeToRelativePipe', () => {
  const pipe = new DateTimeToRelativePipe()

  describe('#transform', () => {
    it('transforms a DateTime into a relative time string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00')))
        .toMatch(/.+ago/)
    })
  })
})
