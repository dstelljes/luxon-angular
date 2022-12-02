import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, DateTimeFormatOptions, LocaleOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToLocaleString'
})
export class DateTimeToLocaleStringPipe implements PipeTransform {
  transform<T extends DateTime | null | undefined>(
    value: T,
    format?: DateTimeFormatOptions
  ) {
    return (
      value == null ? null : value.toLocaleString(format)
    ) as T extends DateTime ? string : null;
  }
}
