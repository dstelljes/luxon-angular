import { Duration } from "luxon";

import { DurationFromMillisecondsPipe } from "./duration-from-milliseconds";

describe("DurationFromMillisecondsPipe", () => {

  let pipe: DurationFromMillisecondsPipe;

  beforeEach(() => {
    pipe = new DurationFromMillisecondsPipe();
  });

  describe("#transform", () => {

    it("transforms milliseconds into a Duration", () => {
      const result = pipe.transform(2.16e7);

      expect(result).toBeInstanceOf(Duration);
      expect(result.isValid).toBe(true);
    });

  });

});
