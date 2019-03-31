import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeLatest'
})
export class DateTimeLatestPipe implements PipeTransform {
  transform (value: DateTime[]): DateTime {
    return DateTime.max(...value)
  }
}
