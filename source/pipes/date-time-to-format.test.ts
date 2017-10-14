import { DateTime } from "luxon";

import { DateTimeToFormatPipe } from "./date-time-to-format";

describe("DateTimeToFormatPipe", () => {
  
  let pipe: DateTimeToFormatPipe;

  beforeEach(() => {
    pipe = new DateTimeToFormatPipe();
  });

  describe("#transform", () => {
    
    it("transforms a DateTime into an arbitrarily formatted string", () => {
      const result = pipe.transform(new DateTime.fromISO("2006-01-02T15:04:05-07:00"), "ccccc HH:mm");

      expect(result).toMatch(/^\w \d{2}:\d{2}$/)
    });

  });

});
