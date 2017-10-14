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
    yarn add luxon-angular
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

## Parsing pipes

### `dateTimeFromFormat`

Transforms an arbitrarily formatted date into a DateTime that can be used with the non-parsing pipes:

```
{{ '02 Jan 2006' | dateTimeFromFormat:'dd LLL yyyy' }}
{{ 'January 2, 2006 3:04 PM' | dateTimeFromFormat:'LLLL d, yyyy h:mm a' }}
```

### `dateTimeFromHttp`

Transforms a HTTP-style date into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Monday, 02-Jan-06 22:04:05 GMT' | dateTimeFromHttp }}
{{ 'Mon, 02 Jan 2006 22:04:05 GMT' | dateTimeFromHttp }}
```

### `dateTimeFromIso`

Transforms an ISO 8601 date into a DateTime that can be used with the non-parsing pipes:

```
{{ '2006-01-02' | dateTimeFromIso }}
{{ '2006-01-02T15' | dateTimeFromIso }}
{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso }}
```

### `dateTimeFromRfc2822`

Transforms a date formatted according to RFC 2822 into a DateTime that can be used with the non-parsing pipes:

```
{{ 'Mon, 02 Jan 2006 15:04:05 -0700' | dateTimeFromRfc2822 }}
```

## Formatting pipes

### `dateTimeToFormat`

Transforms a DateTime into an arbitrarily formatted string:

```
{{ date | dateTimeToFormat:'MMMM d, yyyy' }}
```

### `dateTimeToIso`

Transforms a DateTime into an ISO 8601 date:

```
{{ date | dateTimeToIso }}
```

Also available: `dateTimeToIsoDate`, `dateTimeToIsoTime`, and `dateTimeToIsoWeekDate`.

[angular2-moment]: https://github.com/urish/angular2-moment
[intl]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl
[luxon]: http://isaaccambron.com/luxon/
[moment]: https://momentjs.com/
[relative-time]: https://momentjs.com/docs/#/displaying/fromnow/
[relative-time-proposal]: https://github.com/tc39/proposal-intl-relative-time
