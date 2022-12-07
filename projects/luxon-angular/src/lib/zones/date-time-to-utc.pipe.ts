import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ZoneOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToUtc'
})
export class DateTimeToUtcPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, offset?: number, opts?: ZoneOptions) {
    return (value == null ? null : value.toUTC(offset, opts)) as T extends DateTime ? DateTime : null;
  }
}
