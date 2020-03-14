import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'durationLongest'
})
export class DurationLongestPipe implements PipeTransform {
  transform <T extends Duration[] | null | undefined>(value: T) {
    return (value == null ? null : [...value as Duration[]].sort((a, b) => b.milliseconds - a.milliseconds)[0]) as T extends Duration[] ? Duration : null;
  }
}
