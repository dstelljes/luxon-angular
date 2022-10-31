import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { DateTime, Duration } from 'luxon';

import { LuxonModule } from './luxon.module';

@Component({
  template: `{{ "2006-01-02T15:04:05-07:00" | dateTimeFromIso | dateTimeToUtc | dateTimeToIso }}`
})
export class DateTimeIsoToIsoComponent { }

@Component({
  template: `{{ [[first, second, third] | dateTimeEarliest, third] | dateTimeLatest | dateTimeToFormat:"yyyy" }}`
})
export class DateTimeMinimumMaximumComponent {
  first = DateTime.fromISO('2007-01-02T15:04:05-07:00');
  second = DateTime.fromISO('2005-01-02T15:04:05-07:00');
  third = DateTime.fromISO('2006-01-02T15:04:05-07:00');
}

@Component({
  template: `{{ "P2Y4M6D" | durationFromIso | durationToFormat:"y 'years', M 'months', 'and' d 'days'" }}`
})
export class DurationIsoToFormatComponent { }

@Component({
  template: `{{ "12:24:36" | durationFromIsoTime | durationToHuman }}`
})
export class DurationIsoTimeToHumanComponent { }

@Component({
  template: `{{ ([[first, second, third] | durationLongest, third] | durationShortest).milliseconds }}`
})
export class DurationMinimumMaximumComponent {
  first = Duration.fromMillis(280);
  second = Duration.fromMillis(-40);
  third = Duration.fromMillis(20);
}

@Component({
  template: `{{ (date | dateTimeToLocal | dateTimeToJsDate) || 'nope' }}`
})
export class NullValueComponent {
  date = null;
}

@Component({
  template: `{{ date | dateTimeFromJsDate | dateTimeToJsDate | date:"mmss" }}`
})
export class TimestampToShortComponent {
  date = new Date(1136239445000);
}

@Component({
  template: `{{ "2006-01-02" | dateTimeFromFormat:"yyyy-MM-dd" | dateTimeToFormat:"dd-MM-yyyy" }}`
})
export class YmdToDmyComponent { }

@NgModule({
  declarations: [
    DateTimeIsoToIsoComponent,
    DateTimeMinimumMaximumComponent,
    DurationIsoToFormatComponent,
    DurationIsoTimeToHumanComponent,
    DurationMinimumMaximumComponent,
    NullValueComponent,
    TimestampToShortComponent,
    YmdToDmyComponent
  ],
  imports: [
    CommonModule,
    LuxonModule
  ]
})
export class LuxonTestModule { }

describe('test module', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        LuxonTestModule
      ]
    });
  });

  it('demonstrates ISO 8601 -> DateTime -> UTC -> ISO 8601', () => {
    const fixture = TestBed.createComponent(DateTimeIsoToIsoComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('2006-01-02T22:04:05.000Z');
  });

  it('demonstrates maximum/minimum DateTime', () => {
    const fixture = TestBed.createComponent(DateTimeMinimumMaximumComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('2006');
  });

  it('demonstrates ISO 8601 -> Duration -> format', () => {
    const fixture = TestBed.createComponent(DurationIsoToFormatComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('2 years, 4 months, and 6 days');
  });

  it('demonstrates ISO 8601 time -> Duration -> human', () => {
    const fixture = TestBed.createComponent(DurationIsoTimeToHumanComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('12 hours, 24 minutes, 36 seconds');
  });

  it('demonstrates maximum/minimum Duration', () => {
    const fixture = TestBed.createComponent(DurationMinimumMaximumComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('20');
  });

  it('demonstrates null value handling', () => {
    const fixture = TestBed.createComponent(NullValueComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('nope');
  });

  it('demonstrates timestamp -> Date -> DateTime -> Date', () => {
    const fixture = TestBed.createComponent(TimestampToShortComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('0405');
  });

  it('demonstrates string -> DateTime -> string', () => {
    const fixture = TestBed.createComponent(YmdToDmyComponent);
    const element = fixture.debugElement.nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe('02-01-2006');
  });
});
