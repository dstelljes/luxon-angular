import { Pipe, PipeTransform } from '@angular/core';
import { Duration, DurationOptions } from 'luxon';

@Pipe({
  name: 'durationFromMilliseconds'
})
export class DurationFromMillisecondsPipe implements PipeTransform {
  transform <T extends number | null | undefined>(value: T, opts?: DurationOptions) {
    return (value == null ? null : Duration.fromMillis(value as number, opts)) as T extends number ? Duration : null;
  }
}
