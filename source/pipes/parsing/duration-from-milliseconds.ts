import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationFromMilliseconds'
})
export class DurationFromMillisecondsPipe implements PipeTransform {
  transform (value: number): Duration {
    return Duration.fromMillis(value)
  }
}
