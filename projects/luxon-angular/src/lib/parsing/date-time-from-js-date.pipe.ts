import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, Zone } from 'luxon';

@Pipe({
  name: 'dateTimeFromJsDate'
})
export class DateTimeFromJsDatePipe implements PipeTransform {
  transform <T extends Date | null | undefined>(value: T, opts?: { zone?: string | Zone }) {
    return (value == null ? null : DateTime.fromJSDate(value as Date, opts)) as T extends Date ? DateTime : null;
  }
}
