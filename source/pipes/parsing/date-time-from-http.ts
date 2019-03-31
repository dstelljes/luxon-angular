import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeFromHttp'
})
export class DateTimeFromHttpPipe implements PipeTransform {
  transform (value: string): DateTime {
    return DateTime.fromHTTP(value)
  }
}
