import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, DateTimeJSOptions } from 'luxon';

@Pipe({
  name: 'dateTimeFromMilliseconds'
})
export class DateTimeFromMillisecondsPipe implements PipeTransform {
  transform <T extends number | null | undefined>(value: T, opts?: DateTimeJSOptions) {
    return (value == null ? null : DateTime.fromMillis(value as number, opts)) as T extends number ? DateTime : null;
  }
}
