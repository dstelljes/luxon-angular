import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeFromMilliseconds'
})
export class DateTimeFromMillisecondsPipe implements PipeTransform {
  transform <T extends number | null | undefined>(value: T) {
    return (value == null ? null : DateTime.fromMillis(value as number)) as T extends number ? DateTime : null;
  }
}
