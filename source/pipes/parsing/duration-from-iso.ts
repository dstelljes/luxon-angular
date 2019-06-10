import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationFromIso'
})
export class DurationFromIsoPipe implements PipeTransform {
  transform <T extends string | null | undefined> (value: T) {
    return (value == null ? null : Duration.fromISO(value as string)) as T extends string ? Duration : null
  }
}
