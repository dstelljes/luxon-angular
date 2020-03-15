import { fakeAsync, tick } from '@angular/core/testing';
import { DateTime } from 'luxon';
import { DateTimeToRelativeCalendarPipe } from './date-time-to-relative-calendar.pipe';
import { MockChangeDetectorRef } from '../../../test/mocks';

describe('DateTimeToRelativeCalendarPipe', () => {
  describe('#transform', () => {
    it('transforms an empty input into null', fakeAsync(() => {
      const ref = new MockChangeDetectorRef();
      const pipe = new DateTimeToRelativeCalendarPipe(ref);

      expect(pipe.transform(null)).toBeNull();
      expect(pipe.transform(undefined)).toBeNull();

      pipe.ngOnDestroy();
    }));

    it('transforms a DateTime into a relative time string', fakeAsync(() => {
      const ref = new MockChangeDetectorRef();
      const pipe = new DateTimeToRelativeCalendarPipe(ref);

      expect(pipe.transform(DateTime.fromISO('2006-01-02T15:04:05-07:00')))
        .toMatch(/.+ago/);

      pipe.ngOnDestroy();
    }));
  });

  it('manages change detection', fakeAsync(() => {
    const ref = new MockChangeDetectorRef();
    const pipe = new DateTimeToRelativeCalendarPipe(ref);
    const spy = spyOn(ref, 'markForCheck');

    pipe.transform(null);
    tick(1000);
    expect(spy).toHaveBeenCalledTimes(0);

    pipe.transform(DateTime.utc());
    tick(1000);
    expect(spy).toHaveBeenCalledTimes(1);

    pipe.transform(null);
    tick(1000);
    expect(spy).toHaveBeenCalledTimes(1);

    pipe.ngOnDestroy();
  }));
});
