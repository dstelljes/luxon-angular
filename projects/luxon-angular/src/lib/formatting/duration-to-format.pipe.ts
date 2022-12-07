import { Pipe, PipeTransform } from '@angular/core';
import { Duration } from 'luxon';

@Pipe({
  name: 'durationToFormat'
})
export class DurationToFormatPipe implements PipeTransform {
  transform <T extends Duration | null | undefined>(value: T, format: string, opts?: { floor?: boolean }) {
    return (value == null ? null : value.toFormat(format, opts)) as T extends Duration ? string : null;
  }
}
