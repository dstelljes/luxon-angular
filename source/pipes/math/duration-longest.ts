import { Pipe, PipeTransform } from "@angular/core";
import { Duration } from "luxon";

@Pipe({
  name: "durationLongest"
})
export class DurationLongestPipe implements PipeTransform {

  transform(value: Duration[]): Duration {
    return value.reduce((p, c) => p && p.milliseconds > c.milliseconds ? p : c, undefined);
  }

};
