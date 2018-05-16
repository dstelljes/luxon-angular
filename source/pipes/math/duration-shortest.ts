import { Pipe, PipeTransform } from "@angular/core";
import { Duration } from "luxon";

@Pipe({
  name: "durationShortest"
})
export class DurationShortestPipe implements PipeTransform {

  transform(value: Duration[]): Duration {
    return value.reduce((p, c) => p && p.milliseconds < c.milliseconds ? p : c, undefined);
  }

};
