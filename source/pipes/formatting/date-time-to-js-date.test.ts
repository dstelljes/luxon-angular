import { DateTime } from 'luxon'
import { DateTimeToJsDatePipe } from './date-time-to-js-date'

describe('DateTimeToJsDatePipe', () => {
  const pipe = new DateTimeToJsDatePipe()

  describe('#transform', () => {
    it('transforms an empty input into null', () => {
      expect(pipe.transform(null)).toBeNull()
      expect(pipe.transform(undefined)).toBeNull()
    })

    it('transforms a DateTime into a JavaScript Date', () => {
      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00')))
        .toBeInstanceOf(Date)
    })
  })
})
