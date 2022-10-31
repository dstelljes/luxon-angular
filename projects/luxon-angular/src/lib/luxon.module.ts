import { NgModule } from '@angular/core';

import { DateTimeEarliestPipe } from './math/date-time-earliest.pipe';
import { DateTimeFromFormatPipe } from './parsing/date-time-from-format.pipe';
import { DateTimeFromHttpPipe } from './parsing/date-time-from-http.pipe';
import { DateTimeFromIsoPipe } from './parsing/date-time-from-iso.pipe';
import { DateTimeFromJsDatePipe } from './parsing/date-time-from-js-date.pipe';
import { DateTimeFromMillisecondsPipe } from './parsing/date-time-from-milliseconds.pipe';
import { DateTimeFromRfc2822Pipe } from './parsing/date-time-from-rfc-2822.pipe';
import { DateTimeFromSqlPipe } from './parsing/date-time-from-sql.pipe';
import { DateTimeLatestPipe } from './math/date-time-latest.pipe';
import { DateTimeToFormatPipe } from './formatting/date-time-to-format.pipe';
import { DateTimeToIsoDatePipe } from './formatting/date-time-to-iso-date.pipe';
import { DateTimeToIsoTimePipe } from './formatting/date-time-to-iso-time.pipe';
import { DateTimeToIsoWeekDatePipe } from './formatting/date-time-to-iso-week-date.pipe';
import { DateTimeToIsoPipe } from './formatting/date-time-to-iso.pipe';
import { DateTimeToJsDatePipe } from './formatting/date-time-to-js-date.pipe';
import { DateTimeToLocalPipe } from './zones/date-time-to-local.pipe';
import { DateTimeToRelativePipe } from './formatting/date-time-to-relative.pipe';
import { DateTimeToRelativeCalendarPipe } from './formatting/date-time-to-relative-calendar.pipe';
import { DateTimeToSqlPipe } from './formatting/date-time-to-sql.pipe';
import { DateTimeToUtcPipe } from './zones/date-time-to-utc.pipe';
import { DurationFromIsoPipe } from './parsing/duration-from-iso.pipe';
import { DurationFromIsoTimePipe } from './parsing/duration-from-iso-time.pipe';
import { DurationFromMillisecondsPipe } from './parsing/duration-from-milliseconds.pipe';
import { DurationLongestPipe } from './math/duration-longest.pipe';
import { DurationShortestPipe } from './math/duration-shortest.pipe';
import { DurationToFormatPipe } from './formatting/duration-to-format.pipe';
import { DurationToHumanPipe } from './formatting/duration-to-human.pipe';
import { DurationToIsoPipe } from './formatting/duration-to-iso.pipe';
import { DurationToIsoTimePipe } from './formatting/duration-to-iso-time.pipe';

export {
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
  DurationFromIsoTimePipe,
  DurationFromMillisecondsPipe,
  DurationLongestPipe,
  DurationShortestPipe,
  DurationToFormatPipe,
  DurationToHumanPipe,
  DurationToIsoPipe,
  DurationToIsoTimePipe
};

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
  DurationFromIsoTimePipe,
  DurationFromMillisecondsPipe,
  DurationLongestPipe,
  DurationShortestPipe,
  DurationToFormatPipe,
  DurationToHumanPipe,
  DurationToIsoPipe,
  DurationToIsoTimePipe
];

@NgModule({
  declarations: PIPES,
  exports: [PIPES]
})
export class LuxonModule { }
