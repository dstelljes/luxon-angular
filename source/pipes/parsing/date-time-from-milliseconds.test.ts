import { DateTime } from "luxon";

import { DateTimeFromMillisecondsPipe } from "./date-time-from-milliseconds";

describe("DateTimeFromMillisecondsPipe", () => {

  let pipe: DateTimeFromMillisecondsPipe;

  beforeEach(() => {
    pipe = new DateTimeFromMillisecondsPipe();
  });

  describe("#transform", () => {

    it("transforms epoch milliseconds into a DateTime", () => {
      const result = pipe.transform(1136239445000);

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(true);
    });

  });

});
