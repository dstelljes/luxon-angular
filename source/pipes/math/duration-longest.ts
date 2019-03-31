import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationLongest'
})
export class DurationLongestPipe implements PipeTransform {
  transform (value: Duration[]): Duration {
    return [...value].sort((a, b) => b.milliseconds - a.milliseconds)[0]
  }
}
