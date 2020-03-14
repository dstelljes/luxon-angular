import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeToIso'
})
export class DateTimeToIsoPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T) {
    return (value == null ? null : value.toISO()) as T extends DateTime ? string : null;
  }
}
