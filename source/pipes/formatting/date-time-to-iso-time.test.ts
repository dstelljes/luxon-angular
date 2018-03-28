import { DateTime } from "luxon";

import { DateTimeToIsoTimePipe } from "./date-time-to-iso-time";

describe("DateTimeToIsoTimePipe", () => {

  let pipe: DateTimeToIsoTimePipe;

  beforeEach(() => {
    pipe = new DateTimeToIsoTimePipe();
  });

  describe("#transform", () => {

    it("transforms a DateTime into an ISO 8601 string", () => {
      const result = pipe.transform(DateTime.fromISO("2006-01-02T15:04:05+15:00"));

      expect(result).toMatch(/^\d{2}:\d{2}:\d{2}.\d{3}[+-]\d{2}:\d{2}$/)
    });

  });

});
