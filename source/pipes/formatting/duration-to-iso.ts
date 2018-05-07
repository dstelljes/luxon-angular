import { Pipe, PipeTransform } from "@angular/core";
import { Duration } from "luxon";

@Pipe({
  name: "durationToIso"
})
export class DurationToIsoPipe implements PipeTransform {

  transform(value: Duration): string {
    return value.toISO();
  }

};
