import { Pipe, PipeTransform } from '@angular/core';
import { Duration, DurationOptions } from 'luxon';

@Pipe({
  name: 'durationFromIsoTime'
})
export class DurationFromIsoTimePipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, opts?: DurationOptions) {
    return (value == null ? null : Duration.fromISOTime(value as string, opts)) as T extends string ? Duration : null;
  }
}
