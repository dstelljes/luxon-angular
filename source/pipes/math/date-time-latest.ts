import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeLatest'
})
export class DateTimeLatestPipe implements PipeTransform {
  transform <T extends DateTime[] | null | undefined> (value: T) {
    return (value == null ? null : DateTime.max(...value as DateTime[])) as T extends DateTime[] ? DateTime : null
  }
}
