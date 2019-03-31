import { DateTime } from 'luxon'
import { DateTimeLatestPipe } from './date-time-latest'

describe('DateTimeLatestPipe', () => {
  const pipe = new DateTimeLatestPipe()

  describe('#transform', () => {
    it('transforms an empty list of DateTimes into undefined', () => {
      expect(pipe.transform([])).toBeUndefined()
    })

    it('transforms a list of DateTimes into the maximum of that list', () => {
      const result = pipe.transform([
        DateTime.fromISO('2006-01-02T15:04:05-07:00'),
        DateTime.fromISO('2007-01-02T15:04:05-07:00'),
        DateTime.fromISO('2005-01-02T15:04:05-07:00')
      ])

      expect(result.year).toBe(2007)
    })
  })
})
