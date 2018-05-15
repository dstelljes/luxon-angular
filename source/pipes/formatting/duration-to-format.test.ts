import { Duration } from "luxon";

import { DurationToFormatPipe } from "./duration-to-format";

describe("DurationToFormatPipe", () => {

  let pipe: DurationToFormatPipe;

  beforeEach(() => {
    pipe = new DurationToFormatPipe();
  });

  describe("#transform", () => {

    it("transforms a Duration into an arbitrarily formatted string", () => {
      const result = pipe.transform(Duration.fromISO("P2Y4M6D"), "d 'days', M 'months', y 'years'");

      expect(result).toBe("6 days, 4 months, 2 years")
    });

  });

});
