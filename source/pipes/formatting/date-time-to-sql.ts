import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToSql'
})
export class DateTimeToSqlPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined> (value: T) {
    return (value == null ? null : value.toSQL()) as T extends DateTime ? string : null
  }
}
