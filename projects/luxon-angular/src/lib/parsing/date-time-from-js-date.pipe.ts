import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeFromJsDate'
})
export class DateTimeFromJsDatePipe implements PipeTransform {
  transform <T extends Date | null | undefined>(value: T) {
    return (value == null ? null : DateTime.fromJSDate(value as Date)) as T extends Date ? DateTime : null;
  }
}
