import { NgModule } from "@angular/core";

import { DateTimeFromIsoPipe } from "./pipes/date-time-from-iso";

const PIPES = [
  DateTimeFromIsoPipe
];

@NgModule({
  declarations: PIPES,
  exports: PIPES
})
export class LuxonModule {

};
