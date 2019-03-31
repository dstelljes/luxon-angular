import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeFromSql'
})
export class DateTimeFromSqlPipe implements PipeTransform {
  transform (value: string): DateTime {
    return DateTime.fromSQL(value)
  }
}
