import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeToJsDate'
})
export class DateTimeToJsDatePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T) {
    return (value == null ? null : value.toJSDate()) as T extends DateTime ? Date : null;
  }
}
