import { DateTime } from 'luxon'
import { DateTimeFromIsoPipe } from './date-time-from-iso'

describe('DateTimeFromIsoPipe', () => {
  const pipe = new DateTimeFromIsoPipe()

  describe('#transform', () => {
    it('transforms an ISO 8601 string into a DateTime', () => {
      const result = pipe.transform('2006-01-02T15:04:05-07:00')

      expect(result).toBeInstanceOf(DateTime)
      expect(result.isValid).toBe(true)
    })

    it('transforms an incorrectly formatted string into an invalid DateTime', () => {
      const result = pipe.transform('January 2, 2006')

      expect(result).toBeInstanceOf(DateTime)
      expect(result.isValid).toBe(false)
    })
  })
})
