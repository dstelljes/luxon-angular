# luxon-angular

Date pipes for Angular (2+) based on [Luxon][luxon].

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

## Pipes

### `dateTimeFromHttp`

Transforms a HTTP-style date into a DateTime that can be used with the non-parsing
pipes:

```
{{ 'Monday, 02-Jan-06 22:04:05 GMT' | dateTimeFromHttp }}
{{ 'Mon, 02 Jan 2006 22:04:05 GMT' | dateTimeFromHttp }}
```

### `dateTimeFromIso`

Transforms an ISO 8601 date into a DateTime that can be used with the non-parsing
pipes:

```
{{ '2006-01-02' | dateTimeFromIso }}
{{ '2006-01-02T15' | dateTimeFromIso }}
{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso }}
```

### `dateTimeFromRfc2822`

Transforms a date formatted according to RFC 2822 into a DateTime that can be
used with the non-parsing pipes:

```
{{ 'Mon, 02 Jan 2006 15:04:05 -0700' | dateTimeFromRfc2822 }}
```

### `dateTimeFromString`

Transforms an arbitrarily formatted date into a DateTime that can be used with
the non-parsing pipes:

```
{{ '02 Jan 2006' | dateTimeFromString:'dd LLL yyyy' }}
{{ 'January 2, 2006 3:04 PM' | dateTimeFromString:'LLLL d, yyyy h:mm a' }}
```

[luxon]: http://isaaccambron.com/luxon/
