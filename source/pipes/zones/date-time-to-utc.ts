import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToUtc'
})
export class DateTimeToUtcPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined> (value: T) {
    return (value == null ? null : value.toUTC()) as T extends DateTime ? DateTime : null
  }
}
