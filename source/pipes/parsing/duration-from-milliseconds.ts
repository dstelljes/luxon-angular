import { Pipe, PipeTransform } from '@angular/core'
import { Duration } from 'luxon'

@Pipe({
  name: 'durationFromMilliseconds'
})
export class DurationFromMillisecondsPipe implements PipeTransform {
  transform <T extends number | null | undefined> (value: T) {
    return (value == null ? null : Duration.fromMillis(value as number)) as T extends number ? Duration : null
  }
}
