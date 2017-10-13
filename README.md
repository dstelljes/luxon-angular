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

### `dateTimeFromIso`

Transforms an ISO 8601 date into a DateTime that can be used with the non-parsing
pipes:

```
{{ '2006-01-02' | dateTimeFromIso }}
{{ '2006-01-02T15' | dateTimeFromIso }}
{{ '2006-01-02T15:04:05-07:00' | dateTimeFromIso }}
```

[luxon]: http://isaaccambron.com/luxon/
