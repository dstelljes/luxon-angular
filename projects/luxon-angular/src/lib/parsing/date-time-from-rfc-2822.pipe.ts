import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, DateTimeOptions } from 'luxon';

@Pipe({
  name: 'dateTimeFromRfc2822'
})
export class DateTimeFromRfc2822Pipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, opts?: DateTimeOptions) {
    return (value == null ? null : DateTime.fromRFC2822(value as string, opts)) as T extends string ? DateTime : null;
  }
}
