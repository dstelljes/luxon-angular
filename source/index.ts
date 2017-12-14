import { NgModule } from "@angular/core";

import { DateTimeFromFormatPipe } from "./pipes/parsing/date-time-from-format";
import { DateTimeFromHttpPipe } from "./pipes/parsing/date-time-from-http";
import { DateTimeFromIsoPipe } from "./pipes/parsing/date-time-from-iso";
import { DateTimeFromJsDatePipe } from "./pipes/parsing/date-time-from-js-date";
import { DateTimeFromMillisecondsPipe } from "./pipes/parsing/date-time-from-milliseconds";
import { DateTimeFromRfc2822Pipe } from "./pipes/parsing/date-time-from-rfc-2822";
import { DateTimeFromSqlPipe } from "./pipes/parsing/date-time-from-sql";
import { DateTimeToFormatPipe } from "./pipes/formatting/date-time-to-format";
import { DateTimeToIsoDatePipe } from "./pipes/formatting/date-time-to-iso-date";
import { DateTimeToIsoTimePipe } from "./pipes/formatting/date-time-to-iso-time";
import { DateTimeToIsoWeekDatePipe } from "./pipes/formatting/date-time-to-iso-week-date";
import { DateTimeToIsoPipe } from "./pipes/formatting/date-time-to-iso";
import { DateTimeToJsDatePipe } from "./pipes/formatting/date-time-to-js-date";
import { DateTimeToLocalPipe } from "./pipes/zones/date-time-to-local";
import { DateTimeToSqlPipe } from "./pipes/formatting/date-time-to-sql";
import { DateTimeToUtcPipe } from "./pipes/zones/date-time-to-utc";

const PIPES = [
  DateTimeFromFormatPipe,
  DateTimeFromHttpPipe,
  DateTimeFromIsoPipe,
  DateTimeFromJsDatePipe,
  DateTimeFromMillisecondsPipe,
  DateTimeFromRfc2822Pipe,
  DateTimeFromSqlPipe,
  DateTimeToFormatPipe,
  DateTimeToIsoDatePipe,
  DateTimeToIsoTimePipe,
  DateTimeToIsoWeekDatePipe,
  DateTimeToIsoPipe,
  DateTimeToJsDatePipe,
  DateTimeToLocalPipe,
  DateTimeToSqlPipe,
  DateTimeToUtcPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class LuxonModule {

};
