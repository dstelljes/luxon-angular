import { Duration } from "luxon";

import { DurationToIsoPipe } from "./duration-to-iso";

describe("DurationToIsoPipe", () => {

  let pipe: DurationToIsoPipe;

  beforeEach(() => {
    pipe = new DurationToIsoPipe();
  });

  describe("#transform", () => {

    it("transforms a Duration into an ISO 8601 string", () => {
      const result = pipe.transform(Duration.fromISO("P2Y4M6D"));

      expect(result).toBe("P2Y4M6D");
    });

  });

});
