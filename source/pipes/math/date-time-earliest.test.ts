import { DateTime } from "luxon";

import { DateTimeEarliestPipe } from "./date-time-earliest";

describe("DateTimeEarliestPipe", () => {

  let pipe: DateTimeEarliestPipe;

  beforeEach(() => {
    pipe = new DateTimeEarliestPipe();
  });

  describe("#transform", () => {

    it("transforms a list of DateTimes into the minimum of that list", () => {
      const result = pipe.transform([
        DateTime.fromISO("2007-01-02T15:04:05-07:00"),
        DateTime.fromISO("2005-01-02T15:04:05-07:00"),
        DateTime.fromISO("2006-01-02T15:04:05-07:00")
      ]);

      expect(result.year).toBe(2005);
    });

  });

});
