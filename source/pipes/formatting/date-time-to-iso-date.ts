import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToIsoDate'
})
export class DateTimeToIsoDatePipe implements PipeTransform {
  transform (value: DateTime): string {
    return value.toISODate()
  }
}
