import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, LocaleOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToFormat'
})
export class DateTimeToFormatPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, format: string, opts?: LocaleOptions) {
    return (value == null ? null : value.toFormat(format, opts)) as T extends DateTime ? string : null;
  }
}
