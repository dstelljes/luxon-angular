import { Pipe, PipeTransform } from '@angular/core';
import { Duration, ToHumanDurationOptions } from 'luxon';

@Pipe({
  name: 'durationToHuman'
})
export class DurationToHumanPipe implements PipeTransform {
  transform <T extends Duration | null | undefined>(value: T, opts?: ToHumanDurationOptions) {
    return (value == null ? null : value.toHuman(opts)) as T extends Duration ? string : null;
  }
}
