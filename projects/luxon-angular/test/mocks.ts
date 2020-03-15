import { ChangeDetectorRef } from '@angular/core';

export class MockChangeDetectorRef extends ChangeDetectorRef {
  checkNoChanges() { }
  detach() { }
  detectChanges() { }
  markForCheck() { }
  reattach() { }
}
