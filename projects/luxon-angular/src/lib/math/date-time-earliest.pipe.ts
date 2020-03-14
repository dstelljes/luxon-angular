import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeEarliest'
})
export class DateTimeEarliestPipe implements PipeTransform {
  transform <T extends DateTime[] | null | undefined>(value: T) {
    return (value == null ? null : DateTime.min(...value as DateTime[])) as T extends DateTime[] ? DateTime : null;
  }
}
