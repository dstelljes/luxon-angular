import { NgModule } from '@angular/core'

import { DateTimeEarliestPipe } from './pipes/math/date-time-earliest'
import { DateTimeFromFormatPipe } from './pipes/parsing/date-time-from-format'
import { DateTimeFromHttpPipe } from './pipes/parsing/date-time-from-http'
import { DateTimeFromIsoPipe } from './pipes/parsing/date-time-from-iso'
import { DateTimeFromJsDatePipe } from './pipes/parsing/date-time-from-js-date'
import { DateTimeFromMillisecondsPipe } from './pipes/parsing/date-time-from-milliseconds'
import { DateTimeFromRfc2822Pipe } from './pipes/parsing/date-time-from-rfc-2822'
import { DateTimeFromSqlPipe } from './pipes/parsing/date-time-from-sql'
import { DateTimeLatestPipe } from './pipes/math/date-time-latest'
import { DateTimeToFormatPipe } from './pipes/formatting/date-time-to-format'
import { DateTimeToIsoDatePipe } from './pipes/formatting/date-time-to-iso-date'
import { DateTimeToIsoTimePipe } from './pipes/formatting/date-time-to-iso-time'
import { DateTimeToIsoWeekDatePipe } from './pipes/formatting/date-time-to-iso-week-date'
import { DateTimeToIsoPipe } from './pipes/formatting/date-time-to-iso'
import { DateTimeToJsDatePipe } from './pipes/formatting/date-time-to-js-date'
import { DateTimeToLocalPipe } from './pipes/zones/date-time-to-local'
import { DateTimeToRelativePipe } from './pipes/formatting/date-time-to-relative'
import { DateTimeToRelativeCalendarPipe } from './pipes/formatting/date-time-to-relative-calendar'
import { DateTimeToSqlPipe } from './pipes/formatting/date-time-to-sql'
import { DateTimeToUtcPipe } from './pipes/zones/date-time-to-utc'
import { DurationFromIsoPipe } from './pipes/parsing/duration-from-iso'
import { DurationFromMillisecondsPipe } from './pipes/parsing/duration-from-milliseconds'
import { DurationLongestPipe } from './pipes/math/duration-longest'
import { DurationShortestPipe } from './pipes/math/duration-shortest'
import { DurationToFormatPipe } from './pipes/formatting/duration-to-format'
import { DurationToIsoPipe } from './pipes/formatting/duration-to-iso'

const PIPES = [
  DateTimeEarliestPipe,
  DateTimeFromFormatPipe,
  DateTimeFromHttpPipe,
  DateTimeFromIsoPipe,
  DateTimeFromJsDatePipe,
  DateTimeFromMillisecondsPipe,
  DateTimeFromRfc2822Pipe,
  DateTimeFromSqlPipe,
  DateTimeLatestPipe,
  DateTimeToFormatPipe,
  DateTimeToIsoDatePipe,
  DateTimeToIsoTimePipe,
  DateTimeToIsoWeekDatePipe,
  DateTimeToIsoPipe,
  DateTimeToJsDatePipe,
  DateTimeToLocalPipe,
  DateTimeToRelativePipe,
  DateTimeToRelativeCalendarPipe,
  DateTimeToSqlPipe,
  DateTimeToUtcPipe,
  DurationFromIsoPipe,
  DurationFromMillisecondsPipe,
  DurationLongestPipe,
  DurationShortestPipe,
  DurationToFormatPipe,
  DurationToIsoPipe
]

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class LuxonModule { }
