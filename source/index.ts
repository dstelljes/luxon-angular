import { NgModule } from "@angular/core";

import { DateTimeFromHttpPipe } from "./pipes/date-time-from-http";
import { DateTimeFromIsoPipe } from "./pipes/date-time-from-iso";
import { DateTimeFromRfc2822Pipe } from "./pipes/date-time-from-rfc-2822";
import { DateTimeFromStringPipe } from "./pipes/date-time-from-string";

const PIPES = [
  DateTimeFromHttpPipe,
  DateTimeFromIsoPipe,
  DateTimeFromRfc2822Pipe,
  DateTimeFromStringPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class LuxonModule {

};
