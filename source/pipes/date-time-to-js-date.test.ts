import { DateTime } from "luxon";

import { DateTimeToJsDatePipe } from "./date-time-to-js-date";

describe("DateTimeToJsDatePipe", () => {
  
  let pipe: DateTimeToJsDatePipe;

  beforeEach(() => {
    pipe = new DateTimeToJsDatePipe();
  });

  describe("#transform", () => {
    
    it("transforms a DateTime into a JavaScript Date", () => {
      const result = pipe.transform(DateTime.fromISO("2006-01-02T15:04:05-07:00"));

      expect(result).toBeInstanceOf(Date);
    });

  });

});
