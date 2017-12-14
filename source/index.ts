import { NgModule } from "@angular/core";

import { DateTimeFromFormatPipe } from "./pipes/date-time-from-format";
import { DateTimeFromHttpPipe } from "./pipes/date-time-from-http";
import { DateTimeFromIsoPipe } from "./pipes/date-time-from-iso";
import { DateTimeFromJsDatePipe } from "./pipes/date-time-from-js-date";
import { DateTimeFromMillisecondsPipe } from "./pipes/date-time-from-milliseconds";
import { DateTimeFromRfc2822Pipe } from "./pipes/date-time-from-rfc-2822";
import { DateTimeFromSqlPipe } from "./pipes/date-time-from-sql";
import { DateTimeToFormatPipe } from "./pipes/date-time-to-format";
import { DateTimeToIsoDatePipe } from "./pipes/date-time-to-iso-date";
import { DateTimeToIsoTimePipe } from "./pipes/date-time-to-iso-time";
import { DateTimeToIsoWeekDatePipe } from "./pipes/date-time-to-iso-week-date";
import { DateTimeToIsoPipe } from "./pipes/date-time-to-iso";
import { DateTimeToJsDatePipe } from "./pipes/date-time-to-js-date";
import { DateTimeToLocalPipe } from "./pipes/date-time-to-local";
import { DateTimeToSqlPipe } from "./pipes/date-time-to-sql";
import { DateTimeToUtcPipe } from "./pipes/date-time-to-utc";

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
