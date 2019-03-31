import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationToFormat'
})
export class DurationToFormatPipe implements PipeTransform {
  transform (value: Duration, format: string): string {
    return value.toFormat(format)
  }
}
