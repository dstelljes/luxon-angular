import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'durationToIsoTime'
})
export class DurationToIsoTimePipe implements PipeTransform {
  transform <T extends Duration | null | undefined>(value: T) {
    return (value == null ? null : value.toISOTime()) as T extends Duration ? string : null;
  }
}
