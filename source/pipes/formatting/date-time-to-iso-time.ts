import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToIsoTime'
})
export class DateTimeToIsoTimePipe implements PipeTransform {
  transform <T extends DateTime | null | undefined> (value: T) {
    return (value == null ? null : value.toISOTime()) as T extends DateTime ? string : null
  }
}
