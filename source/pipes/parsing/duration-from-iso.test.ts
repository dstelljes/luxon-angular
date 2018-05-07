import { Duration } from "luxon";

import { DurationFromIsoPipe } from "./duration-from-iso";

describe("DurationFromIsoPipe", () => {

  let pipe: DurationFromIsoPipe;

  beforeEach(() => {
    pipe = new DurationFromIsoPipe();
  });

  describe("#transform", () => {

    it("transforms an ISO 8601 string into a Duration", () => {
      const result = pipe.transform("P2Y4M6D");

      expect(result).toBeInstanceOf(Duration);
      expect(result.isValid).toBe(true);
    });

    it("transforms an incorrectly formatted string into an invalid DateTime", () => {
      const result = pipe.transform("two years, four months, six days");

      expect(result).toBeInstanceOf(Duration);
      expect(result.isValid).toBe(false);
    });

  });

});
