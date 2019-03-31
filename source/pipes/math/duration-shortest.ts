import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationShortest'
})
export class DurationShortestPipe implements PipeTransform {
  transform (value: Duration[]): Duration {
    return [...value].sort((a, b) => a.milliseconds - b.milliseconds)[0]
  }
}
