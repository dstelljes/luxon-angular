import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToJsDate'
})
export class DateTimeToJsDatePipe implements PipeTransform {
  transform (value: DateTime): Date {
    return value.toJSDate()
  }
}
