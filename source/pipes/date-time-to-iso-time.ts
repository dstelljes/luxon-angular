import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeToIsoTime"
})
export class DateTimeToIsoTimePipe implements PipeTransform {

  transform(value: DateTime): string {
    return value.toISOTime();
  }

};
