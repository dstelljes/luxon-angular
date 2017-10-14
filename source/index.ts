import { NgModule } from "@angular/core";

import { DateTimeFromHttpPipe } from "./pipes/date-time-from-http";
import { DateTimeFromIsoPipe } from "./pipes/date-time-from-iso";
import { DateTimeFromRfc2822Pipe } from "./pipes/date-time-from-rfc-2822";
import { DateTimeFromStringPipe } from "./pipes/date-time-from-string";
import { DateTimeToIsoDatePipe } from "./pipes/date-time-to-iso-date";
import { DateTimeToIsoTimePipe } from "./pipes/date-time-to-iso-time";
import { DateTimeToIsoWeekDatePipe } from "./pipes/date-time-to-iso-week-date";
import { DateTimeToIsoPipe } from "./pipes/date-time-to-iso";

const PIPES = [
  DateTimeFromHttpPipe,
  DateTimeFromIsoPipe,
  DateTimeFromRfc2822Pipe,
  DateTimeFromStringPipe,
  DateTimeToIsoDatePipe,
  DateTimeToIsoTimePipe,
  DateTimeToIsoWeekDatePipe,
  DateTimeToIsoPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class LuxonModule {

};
