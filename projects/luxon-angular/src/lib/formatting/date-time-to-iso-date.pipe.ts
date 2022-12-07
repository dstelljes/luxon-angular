import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToISODateOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToIsoDate'
})
export class DateTimeToIsoDatePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, opts?: ToISODateOptions) {
    return (value == null ? null : value.toISODate(opts)) as T extends DateTime ? string : null;
  }
}
