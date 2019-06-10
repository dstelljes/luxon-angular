import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationShortest'
})
export class DurationShortestPipe implements PipeTransform {
  transform <T extends Duration[] | null | undefined> (value: T) {
    return (value == null ? null : [...value as Duration[]].sort((a, b) => a.milliseconds - b.milliseconds)[0]) as T extends Duration[] ? Duration : null
  }
}
