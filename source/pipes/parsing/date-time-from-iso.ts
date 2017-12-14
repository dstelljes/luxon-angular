import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeFromIso"
})
export class DateTimeFromIsoPipe implements PipeTransform {

  transform(value: string): DateTime {
    return DateTime.fromISO(value);
  }

};
