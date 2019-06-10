import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeFromSql'
})
export class DateTimeFromSqlPipe implements PipeTransform {
  transform <T extends string | null | undefined> (value: T) {
    return (value == null ? null : DateTime.fromSQL(value as string)) as T extends string ? DateTime : null
  }
}
