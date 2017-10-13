import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeFromRfc2822"
})
export class DateTimeFromRfc2822Pipe implements PipeTransform {

  transform(value: string): DateTime {
    return DateTime.fromRFC2822(value);
  }

};
