import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeToLocal'
})
export class DateTimeToLocalPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T) {
    return (value == null ? null : value.toLocal()) as T extends DateTime ? DateTime : null;
  }
}
