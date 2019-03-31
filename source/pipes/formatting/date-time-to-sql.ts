import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToSql'
})
export class DateTimeToSqlPipe implements PipeTransform {
  transform (value: DateTime): string {
    return value.toSQL()
  }
}
