import { Component } from "@angular/core";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { By } from "@angular/platform-browser";

import { LuxonModule } from "./";

@Component({
  template: `
    <span id="iso-to-iso">{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso | dateTimeToUtc | dateTimeToIso }}</span>
    <span id="ymd-to-dmy">{{ '2006-01-02' | dateTimeFromFormat:'yyyy-MM-dd' | dateTimeToFormat:'dd-MM-yyyy' }}</span>
  `
})
export class TestComponent {

};

describe("test component", () => {

  let fixture: ComponentFixture<TestComponent>;
  let instance: TestComponent;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        TestComponent
      ],
      imports: [
        LuxonModule
      ]
    });

    fixture = TestBed.createComponent(TestComponent);
    instance = fixture.componentInstance;
  });

  it("demonstrates ISO 8601 -> DateTime -> UTC -> ISO 8601", () => {
    const element = fixture.debugElement.query(By.css("#iso-to-iso")).nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("2006-01-02T22:04:05.000Z");
  });

  it("demonstrates string -> DateTime -> string", () => {
    const element = fixture.debugElement.query(By.css("#ymd-to-dmy")).nativeElement;
    fixture.detectChanges();

    expect(element.textContent).toBe("02-01-2006");
  });

});
