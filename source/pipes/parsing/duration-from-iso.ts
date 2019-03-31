import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationFromIso'
})
export class DurationFromIsoPipe implements PipeTransform {
  transform (value: string): Duration {
    return Duration.fromISO(value)
  }
}
