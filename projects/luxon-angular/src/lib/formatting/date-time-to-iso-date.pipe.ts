import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeToIsoDate'
})
export class DateTimeToIsoDatePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T) {
    return (value == null ? null : value.toISODate()) as T extends DateTime ? string : null;
  }
}
