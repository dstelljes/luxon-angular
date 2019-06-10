import { Pipe, PipeTransform } from '@angular/core'
import { DateTime, ToRelativeUnit } from 'luxon'

@Pipe({
  name: 'dateTimeToRelativeCalendar'
})
export class DateTimeToRelativeCalendarPipe implements PipeTransform {
  transform <T extends DateTime | null | undefined> (value: T, unit?: ToRelativeUnit) {
    return (value == null ? null : value.toRelativeCalendar({
      unit
    })) as T extends DateTime ? string : null
  }
}
