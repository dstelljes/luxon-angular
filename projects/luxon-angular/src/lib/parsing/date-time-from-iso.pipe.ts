import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeFromIso'
})
export class DateTimeFromIsoPipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T) {
    return (value == null ? null : DateTime.fromISO(value as string)) as T extends string ? DateTime : null;
  }
}
