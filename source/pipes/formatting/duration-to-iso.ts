import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationToIso'
})
export class DurationToIsoPipe implements PipeTransform {
  transform <T extends Duration | null | undefined> (value: T) {
    return (value == null ? null : value.toISO()) as T extends Duration ? string : null
  }
}
