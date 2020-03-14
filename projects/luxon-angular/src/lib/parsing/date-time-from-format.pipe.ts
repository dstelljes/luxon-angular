import { Pipe, PipeTransform } from '@angular/core';
import { DateTime } from 'luxon';

@Pipe({
  name: 'dateTimeFromFormat'
})
export class DateTimeFromFormatPipe implements PipeTransform {
  transform <T extends string | null | undefined>(value: T, format: string) {
    return (value == null ? null : DateTime.fromFormat(value as string, format)) as T extends string ? DateTime : null;
  }
}
