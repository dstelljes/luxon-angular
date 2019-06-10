import { DateTime } from 'luxon'
import { DateTimeToIsoWeekDatePipe } from './date-time-to-iso-week-date'

describe('DateTimeToIsoWeekDatePipe', () => {
  const pipe = new DateTimeToIsoWeekDatePipe()

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull()
      expect(pipe.transform(undefined)).toBeNull()
    })

    it('transforms a DateTime into an ISO 8601 string', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05+15:00')))
        .toMatch(/^\d{4}-W\d{2}-\d$/)
    })
  })
})
