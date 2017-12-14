import { Pipe, PipeTransform } from "@angular/core";
import { DateTime } from "luxon";

@Pipe({
  name: "dateTimeToLocal"
})
export class DateTimeToLocalPipe implements PipeTransform {

  transform(value: DateTime): DateTime {
    return value.toLocal();
  }

};
