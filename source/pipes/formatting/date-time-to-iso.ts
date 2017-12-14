import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeToIso"
})
export class DateTimeToIsoPipe implements PipeTransform {

  transform(value: DateTime): string {
    return value.toISO();
  }

};
