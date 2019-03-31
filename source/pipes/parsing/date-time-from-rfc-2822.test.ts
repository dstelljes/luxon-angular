import { DateTime } from 'luxon'
import { DateTimeFromRfc2822Pipe } from './date-time-from-rfc-2822'

describe('DateTimeFromRfc2822Pipe', () => {
  const pipe = new DateTimeFromRfc2822Pipe()

  describe('#transform', () => {
    it('transforms a string formatted according to RFC 2822 into a DateTime', () => {
      const result = pipe.transform('Mon, 02 Jan 2006 15:04:05 -0700')

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
