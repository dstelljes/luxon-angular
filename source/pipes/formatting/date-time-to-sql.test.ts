import { DateTime } from "luxon";

import { DateTimeToSqlPipe } from "./date-time-to-sql";

describe("DateTimeToSqlPipe", () => {

  let pipe: DateTimeToSqlPipe;

  beforeEach(() => {
    pipe = new DateTimeToSqlPipe();
  });

  describe("#transform", () => {

    it("transforms a DateTime into an SQL-formatted date string", () => {
      const result = pipe.transform(DateTime.fromSQL("2006-01-02 15:04:05 -07:00"));

      expect(result).toMatch(/^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}\.\d{3} -\d{2}:\d{2}$/);
    });

  });

});
