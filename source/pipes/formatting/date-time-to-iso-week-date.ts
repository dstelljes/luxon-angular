import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeToIsoWeekDate"
})
export class DateTimeToIsoWeekDatePipe implements PipeTransform {

  transform(value: DateTime): string {
    return value.toISOWeekDate();
  }

};
