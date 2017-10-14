import { DateTime } from "luxon";

import { DateTimeToIsoWeekDatePipe } from "./date-time-to-iso-week-date";

describe("DateTimeToIsoWeekDatePipe", () => {
  
  let pipe: DateTimeToIsoWeekDatePipe;

  beforeEach(() => {
    pipe = new DateTimeToIsoWeekDatePipe();
  });

  describe("#transform", () => {
    
    it("transforms a DateTime into an ISO 8601 string", () => {
      const result = pipe.transform(new DateTime.fromISO("2006-01-02T15:04:05+15:00"));

      expect(result).toMatch(/\d{4}-W\d{2}-\d/)
    });

  });

});
