import { Pipe, PipeTransform } from '@angular/core';
import { Duration, DurationOptions } from 'luxon';

@Pipe({
  name: 'durationFromIso'
})
export class DurationFromIsoPipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, opts?: DurationOptions) {
    return (value == null ? null : Duration.fromISO(value as string, opts)) as T extends string ? Duration : null;
  }
}
