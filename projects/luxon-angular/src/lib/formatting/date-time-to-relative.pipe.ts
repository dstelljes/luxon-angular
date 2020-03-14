import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToRelativeUnit } from 'luxon';

@Pipe({
  name: 'dateTimeToRelative'
})
export class DateTimeToRelativePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, unit?: ToRelativeUnit, style?: 'long' | 'short' | 'narrow') {
    return (value == null ? null : value.toRelative({
      style,
      unit
    })) as T extends DateTime ? string : null;
  }
}
