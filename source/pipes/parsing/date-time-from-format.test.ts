import { DateTime } from 'luxon'
import { DateTimeFromFormatPipe } from './date-time-from-format'

describe('DateTimeFromFormatPipe', () => {
  const pipe = new DateTimeFromFormatPipe()

  describe('#transform', () => {
    it('transforms an arbitrarily formatted string into a DateTime', () => {
      const result = pipe.transform('02 Jan 2006', 'dd LLL yyyy')

      expect(result).toBeInstanceOf(DateTime)
      expect(result.isValid).toBe(true)
    })

    it("transforms a string that doesn't fit the provided format into an invalid DateTime", () => {
      const result = pipe.transform('January 2, 2006', 'dd LLL yyyy')

      expect(result).toBeInstanceOf(DateTime)
      expect(result.isValid).toBe(false)
    })
  })
})
