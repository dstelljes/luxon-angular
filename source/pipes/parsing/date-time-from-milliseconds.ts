import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeFromMilliseconds'
})
export class DateTimeFromMillisecondsPipe implements PipeTransform {
  transform (value: number): DateTime {
    return DateTime.fromMillis(value)
  }
}
