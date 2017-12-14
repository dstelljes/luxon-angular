import { DateTime } from "luxon";

import { DateTimeFromHttpPipe } from "./date-time-from-http";

describe("DateTimeFromHttpPipe", () => {
  
  let pipe: DateTimeFromHttpPipe;

  beforeEach(() => {
    pipe = new DateTimeFromHttpPipe();
  });

  describe("#transform", () => {
    
    it("transforms a string formatted according to the HTTP header specs into a DateTime", () => {
      const result = pipe.transform("Mon, 02 Jan 2006 22:04:05 GMT");

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(true);
    });

    it("transforms an incorrectly formatted string into an invalid DateTime", () => {
      const result = pipe.transform("January 2, 2006");

      expect(result).toBeInstanceOf(DateTime);
      expect(result.isValid).toBe(false);
    });

  });

});
