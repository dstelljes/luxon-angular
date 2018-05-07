import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DateTime } from "luxon";

import { LuxonModule } from "./";

@Component({
  template: `{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso | dateTimeToUtc | dateTimeToIso }}`
})
export class DateTimeIsoToIsoComponent {

};

@Component({
  template: `{{ 'P2Y4M6D' | durationFromIso | durationToIso }}`
})
export class DurationIsoToIsoComponent {

};

@Component({
  template: `{{ [first, second, third] | dateTimeEarliest | dateTimeToFormat:'yyyy' }}`
})
export class MinimumComponent {
  first = DateTime.fromISO("2007-01-02T15:04:05-07:00");
  second = DateTime.fromISO("2005-01-02T15:04:05-07:00");
  third = DateTime.fromISO("2006-01-02T15:04:05-07:00");
};

@Component({
  template: `{{ date | dateTimeFromJsDate | dateTimeToJsDate | date:'mmss' }}`
})
export class TimestampToShortComponent {
  date = new Date(1136239445000);
};

@Component({
  template: `{{ '2006-01-02' | dateTimeFromFormat:'yyyy-MM-dd' | dateTimeToFormat:'dd-MM-yyyy' }}`
})
export class YmdToDmyComponent {

};

@NgModule({
  declarations: [
    DateTimeIsoToIsoComponent,
    DurationIsoToIsoComponent,
    MinimumComponent,
    TimestampToShortComponent,
    YmdToDmyComponent
  ],
  imports: [
    CommonModule,
    LuxonModule
  ]
})
export class LuxonTestModule {

};

describe("test module", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LuxonTestModule
      ]
    });
  });

  it("demonstrates ISO 8601 -> DateTime -> UTC -> ISO 8601", () => {
    const fixture = TestBed.createComponent(DateTimeIsoToIsoComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("2006-01-02T22:04:05.000Z");
  });

  it("demonstrates ISO 8601 -> Duration -> ISO 8601", () => {
    const fixture = TestBed.createComponent(DurationIsoToIsoComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("P2Y4M6D");
  });

  it("demonstrates minimum", () => {
    const fixture = TestBed.createComponent(MinimumComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("2005");
  });

  it("demonstrates string -> DateTime -> string", () => {
    const fixture = TestBed.createComponent(YmdToDmyComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("02-01-2006");
  });

  it("demonstrates timestamp -> Date -> DateTime -> Date", () => {
    const fixture = TestBed.createComponent(TimestampToShortComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("0405");
  });

});
