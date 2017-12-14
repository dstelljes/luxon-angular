import { DateTime } from "luxon";

import { DateTimeToLocalPipe } from "./date-time-to-local";

describe("DateTimeToLocalPipe", () => {

  let pipe: DateTimeToLocalPipe;

  beforeEach(() => {
    pipe = new DateTimeToLocalPipe();
  });

  describe("#transform", () => {

    it("transforms a UTC DateTime to local", () => {
      const result = pipe.transform(DateTime.fromISO("2006-01-02T15:04:05-07:00").toUTC());
      const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      expect(result.zoneName).toBe(zone);
    });

  });

});
