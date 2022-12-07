import { Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToSQLOptions } from 'luxon';

@Pipe({
  name: 'dateTimeToSql'
})
export class DateTimeToSqlPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined>(value: T, opts?: ToSQLOptions) {
    return (value == null ? null : value.toSQL(opts)) as T extends DateTime ? string : null;
  }
}
