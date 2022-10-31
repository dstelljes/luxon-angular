import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'durationFromIsoTime'
})
export class DurationFromIsoTimePipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T) {
    return (value == null ? null : Duration.fromISOTime(value as string)) as T extends string ? Duration : null;
  }
}
