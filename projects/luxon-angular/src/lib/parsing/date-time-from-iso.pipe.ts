import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, DateTimeOptions } from 'luxon';

@Pipe({
  name: 'dateTimeFromIso'
})
export class DateTimeFromIsoPipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, opts?: DateTimeOptions) {
    return (value == null ? null : DateTime.fromISO(value as string, opts)) as T extends string ? DateTime : null;
  }
}
