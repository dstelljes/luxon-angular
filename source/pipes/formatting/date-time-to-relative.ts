import { Pipe, PipeTransform } from '@angular/core'
import { DateTime, ToRelativeUnit } from 'luxon'

@Pipe({
  name: 'dateTimeToRelative'
})
export class DateTimeToRelativePipe implements PipeTransform {
  transform (value: DateTime, unit?: ToRelativeUnit, style?: 'long' | 'short' | 'narrow'): string {
    return value.toRelative({
      style,
      unit
    }) as string
  }
}
