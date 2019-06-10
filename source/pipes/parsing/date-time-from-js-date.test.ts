import { DateTime } from 'luxon'
import { DateTimeFromJsDatePipe } from './date-time-from-js-date'

describe('DateTimeFromJsDatePipe', () => {
  const pipe = new DateTimeFromJsDatePipe()

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull()
      expect(pipe.transform(undefined)).toBeNull()
    })

    it('transforms a JavaScript Date into a DateTime', () => {
      const result = pipe.transform(new Date(1136239445000))

      expect(result).toBeInstanceOf(DateTime)
      expect(result.isValid).toBe(true)
    })
  })
})
