import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToISOTimeOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToIso'
})
export class DateTimeToIsoPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, opts?: ToISOTimeOptions) {
    return (value == null ? null : value.toISO(opts)) as T extends DateTime ? string : null;
  }
}
