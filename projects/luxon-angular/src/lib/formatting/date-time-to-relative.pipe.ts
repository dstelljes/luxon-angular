import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { DateTime, ToRelativeOptions, ToRelativeUnit } from 'luxon';
import { Subscription, interval } from 'rxjs';

@Pipe({
  name: 'dateTimeToRelative',
  pure: false
})
export class DateTimeToRelativePipe implements OnDestroy, PipeTransform {
  private subscription: Subscription;

  constructor(private ref: ChangeDetectorRef) { }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
      this.subscription = null;
    }
  }

  transform <T extends DateTime | null | undefined>(value: T, opts?: ToRelativeOptions) {
    if (value == null) {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = null;
      }

      return null;
    }

    if (!this.subscription) {
      this.subscription = interval(1000).subscribe(() => this.ref.markForCheck());
    }

    return value.toRelative(opts);
  }
}
