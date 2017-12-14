import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeEarliest"
})
export class DateTimeEarliestPipe implements PipeTransform {

  transform(value: DateTime[]): DateTime {
    return DateTime.min(...value);
  }

};
