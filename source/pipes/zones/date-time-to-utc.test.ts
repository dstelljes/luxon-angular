import { DateTime } from 'luxon'
import { DateTimeToUtcPipe } from './date-time-to-utc'

describe('DateTimeToUtcPipe', () => {
  const pipe = new DateTimeToUtcPipe()

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull()
      expect(pipe.transform(undefined)).toBeNull()
    })

    it('transforms a local DateTime to UTC', () => {
      const result = pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00').toLocal())

      expect(result.zoneName).toBe('UTC')
    })
  })
})
