import { Pipe, PipeTransform } from '@angular/core'
import { DateTime, ToRelativeUnit } from 'luxon'

@Pipe({
  name: 'dateTimeToRelativeCalendar'
})
export class DateTimeToRelativeCalendarPipe implements PipeTransform {
  transform (value: DateTime, unit?: ToRelativeUnit): string {
    return value.toRelativeCalendar({
      unit
    }) as string
  }
}
