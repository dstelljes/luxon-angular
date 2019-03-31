import { Pipe, PipeTransform } from '@angular/core'
import { DateTime } from 'luxon'

@Pipe({
  name: 'dateTimeToFormat'
})
export class DateTimeToFormatPipe implements PipeTransform {
  transform (value: DateTime, format: string): string {
    return value.toFormat(format)
  }
}
