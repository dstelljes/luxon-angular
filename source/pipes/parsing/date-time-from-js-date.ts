import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeFromJsDate'
})
export class DateTimeFromJsDatePipe implements PipeTransform {
  transform (value: Date): DateTime {
    return DateTime.fromJSDate(value)
  }
}
