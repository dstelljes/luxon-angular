import { Pipe, PipeTransform } from '@angular/core';
import { Duration, ToISOTimeDurationOptions } from 'luxon';

@Pipe({
  name: 'durationToIsoTime'
})
export class DurationToIsoTimePipe implements PipeTransform {
  transform <T extends Duration | null | undefined>(value: T, opts?: ToISOTimeDurationOptions) {
    return (value == null ? null : value.toISOTime(opts)) as T extends Duration ? string : null;
  }
}
