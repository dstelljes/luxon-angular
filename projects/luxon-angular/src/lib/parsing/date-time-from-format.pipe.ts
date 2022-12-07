import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, DateTimeOptions } from 'luxon';

@Pipe({
  name: 'dateTimeFromFormat'
})
export class DateTimeFromFormatPipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, format: string, opts?: DateTimeOptions) {
    return (value == null ? null : DateTime.fromFormat(value as string, format, opts)) as T extends string ? DateTime : null;
  }
}
