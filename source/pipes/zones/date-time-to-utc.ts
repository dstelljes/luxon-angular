import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeToUtc"
})
export class DateTimeToUtcPipe implements PipeTransform {

  transform(value: DateTime): DateTime {
    return value.toUTC();
  }

};
