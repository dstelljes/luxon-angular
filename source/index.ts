import { NgModule } from "@angular/core";

import { DateTimeFromFormatPipe } from "./pipes/date-time-from-format";
import { DateTimeFromHttpPipe } from "./pipes/date-time-from-http";
import { DateTimeFromIsoPipe } from "./pipes/date-time-from-iso";
import { DateTimeFromRfc2822Pipe } from "./pipes/date-time-from-rfc-2822";
import { DateTimeToFormatPipe } from "./pipes/date-time-to-format";
import { DateTimeToIsoDatePipe } from "./pipes/date-time-to-iso-date";
import { DateTimeToIsoTimePipe } from "./pipes/date-time-to-iso-time";
import { DateTimeToIsoWeekDatePipe } from "./pipes/date-time-to-iso-week-date";
import { DateTimeToIsoPipe } from "./pipes/date-time-to-iso";

const PIPES = [
  DateTimeFromFormatPipe,
  DateTimeFromHttpPipe,
  DateTimeFromIsoPipe,
  DateTimeFromRfc2822Pipe,
  DateTimeToFormatPipe,
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
