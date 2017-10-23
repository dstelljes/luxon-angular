import { CommonModule } from "@angular/common";
import { Component, NgModule } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";

import { LuxonModule } from "./";

@Component({
  template: `{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso | dateTimeToUtc | dateTimeToIso }}`
})
export class IsoToIsoComponent {

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
    IsoToIsoComponent,
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

describe("test component", () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LuxonTestModule
      ]
    });
  });

  it("demonstrates ISO 8601 -> DateTime -> UTC -> ISO 8601", () => {
    const fixture = TestBed.createComponent(IsoToIsoComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("2006-01-02T22:04:05.000Z");
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
