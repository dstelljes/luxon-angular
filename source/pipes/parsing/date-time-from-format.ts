import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeFromFormat"
})
export class DateTimeFromFormatPipe implements PipeTransform {

  transform(value: string, format: string): DateTime {
    return DateTime.fromString(value, format);
  }

};
