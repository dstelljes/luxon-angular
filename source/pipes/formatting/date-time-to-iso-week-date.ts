import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToIsoWeekDate'
})
export class DateTimeToIsoWeekDatePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined> (value: T) {
    return (value == null ? null : value.toISOWeekDate()) as T extends DateTime ? string : null
  }
}
