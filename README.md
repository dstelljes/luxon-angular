# luxon-angular

This is a collection of date/time pipes for Angular (2+) based on [Luxon][luxon].

Luxon is an experimental JavaScript library for parsing, formatting, and manipulating dates and times. It’s a descendant of [Moment.js][moment], but it differs in a few key ways:

-   Strictness: Moment will ingest pretty much anything that resembles a date. Luxon only parses properly formatted values.

-   Immutability: Operations on a Moment instance modify the instance itself. Luxon instances (DateTime, Duration, Interval) can’t be mutated; operations return a new object and the original remains unchanged.

-   Scope: Moment handles formatting and internationalization internally. Luxon relies on the [Intl API][intl].

This module is based on a similar project for Moment, [angular2-moment]. Because Luxon objects are immutable, they’re a nice fit for Angular’s pure-by-default pipes. However, luxon-angular can’t achieve feature parity with angular2-moment until Luxon supports [relative time formatting][relative-time], which can’t happen until relative time formatting [is supported natively][relative-time-proposal].

## Getting started

-   Install (making sure Luxon is installed as well):

    ```
    npm install --save luxon luxon-angular
    ```

    or

    ```
    yarn add luxon luxon-angular
    ```

-   Import `LuxonModule`:

    ```typescript
    import { NgModule } from "@angular/core";
    import { LuxonModule } from "luxon-angular";

    @NgModule({
      imports: [
        LuxonModule
      ]
    })
    export class AppModule {

    };
    ```

-   Start using the pipes:

    ```typescript
    import { Component } from "@angular/core";

    @Component({
      template: `
        This component was created at {{ date | dateTimeFromJsDate | dateTimeToFormat:'tt' }}!
      `
    })
    export class AppComponent {
      date: Date;

      constructor() {
        this.date = new Date();
      }
    };
    ```

## Available pipes

-   [Parsing](#parsing)
-   [Math](#math)
-   [Time zones and offsets](#time-zones-and-offsets)
-   [Formatting](#formatting)

### Parsing

#### `dateTimeFromFormat`

Transforms an arbitrarily formatted date into a DateTime that can be used with the non-parsing pipes:

```
{{ '02 Jan 2006' | dateTimeFromFormat:'dd LLL yyyy' }}
{{ 'January 2, 2006 3:04 PM' | dateTimeFromFormat:'LLLL d, yyyy h:mm a' }}
```

#### `dateTimeFromHttp`

Transforms a HTTP-style date into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Monday, 02-Jan-06 22:04:05 GMT' | dateTimeFromHttp }}
{{ 'Mon, 02 Jan 2006 22:04:05 GMT' | dateTimeFromHttp }}
```

#### `dateTimeFromIso`

Transforms an ISO 8601 date into a DateTime that can be used with the non-parsing pipes:

```
{{ '2006-01-02' | dateTimeFromIso }}
{{ '2006-01-02T15' | dateTimeFromIso }}
{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso }}
```

#### `dateTimeFromJsDate`

Transforms a JavaScript Date object into a DateTime that can be used with the non-parsing pipes:

```
{{ date | dateTimeFromJsDate }}
```

#### `dateTimeFromMilliseconds`

Transforms a timestamp in milliseconds from epoch into a DateTime that can be used with the non-parsing pipes:

```
{{ date | dateTimeFromMilliseconds }}
```

#### `dateTimeFromRfc2822`

Transforms a date formatted according to RFC 2822 into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Mon, 02 Jan 2006 15:04:05 -0700' | dateTimeFromRfc2822 }}
```

#### `dateTimeFromSql`

Transforms a SQL-style date into a DateTime that can be used with the non-parsing pipes:

```
{{ '2006-01-02 15:04:05.000-0700' | dateTimeFromSql }}
```

### Math

#### `dateTimeEarliest`

Selects the earliest (minimum) from a list of DateTimes.

```
{{ [early, earliest, earlier] | dateTimeEarliest }}
```

#### `dateTimeLatest`

Selects the latest (maximum) from a list of DateTimes.

```
{{ [late, latest, later] | dateTimeLatest }}
```

### Time zones and offsets

In general, all time zone and offset operations change the DateTime’s zone but keep the underlying timestamp. For more information, see the [Luxon docs][changing-zones].

#### `dateTimeToLocal`

Sets the zone of the DateTime to the local zone:

```
{{ date | dateTimeToLocal }}
```

#### `dateTimeToUtc`

Sets the zone of the DateTime to the Coordinated Universal Time zone:

```
{{ date | dateTimeToUtc }}
```

### Formatting

#### `dateTimeToFormat`

Transforms a DateTime into an arbitrarily formatted string:

```
{{ date | dateTimeToFormat:'MMMM d, yyyy' }}
```

#### `dateTimeToIso`

Transforms a DateTime into an ISO 8601 date:

```
{{ date | dateTimeToIso }}
```

Also available: `dateTimeToIsoDate`, `dateTimeToIsoTime`, and `dateTimeToIsoWeekDate`.

#### `dateTimeToJsDate`

Transforms a DateTime into a JavaScript date:

```
{{ date | dateTimeToJsDate }}
```

Works with Angular’s [`DatePipe`][angular-datepipe]:

```
{{ date | dateTimeToJsDate | date:'fullDate' }}
```

#### `dateTimeToSql`

Transforms a DateTime into an SQL date string:

```
{{ date | dateTimeToSql }}
```

[angular-datepipe]: https://angular.io/api/common/DatePipe
[angular2-moment]: https://github.com/urish/angular2-moment
[changing-zones]: https://moment.github.io/luxon/docs/manual/zones.html#changing-zones
[intl]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
[js-date]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
[luxon]: http://isaaccambron.com/luxon/
[moment]: https://momentjs.com/
[relative-time]: https://momentjs.com/docs/#/displaying/fromnow/
[relative-time-proposal]: https://github.com/tc39/proposal-intl-relative-time
