import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToISOTimeOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToIsoTime'
})
export class DateTimeToIsoTimePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, opts?: ToISOTimeOptions) {
    return (value == null ? null : value.toISOTime(opts)) as T extends DateTime ? string : null;
  }
}
