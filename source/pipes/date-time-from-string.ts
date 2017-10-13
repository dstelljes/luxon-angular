import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeFromString"
})
export class DateTimeFromStringPipe implements PipeTransform {

  transform(value: string, format: string): DateTime {
    return DateTime.fromString(value, format);
  }

};
