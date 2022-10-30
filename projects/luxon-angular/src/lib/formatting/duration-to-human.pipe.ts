import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'durationToHuman'
})
export class DurationToHumanPipe implements PipeTransform {
  transform <T extends Duration | null | undefined>(value: T) {
    return (value == null ? null : value.toHuman()) as T extends Duration ? string : null;
  }
}
