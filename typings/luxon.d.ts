declare module "luxon" {

  export class DateTime {

    static fromHTTP(text: string, options?: Object): DateTime;
    static fromISO(text: string, options?: Object): DateTime;
    static fromJSDate(date: Date | any, options?: Object): DateTime;
    static fromMillis(milliseconds: number, options?: Object): DateTime;
    static fromRFC2822(text: string, options?: Object): DateTime;
    static fromSQL(text: string, options?: Object): DateTime;
    static fromString(text: string, format: string, options?: Object): DateTime;

    static max(...dateTimes: DateTime[]): DateTime
    static min(...dateTimes: DateTime[]): DateTime

    readonly day: number;
    readonly daysInMonth: number;
    readonly daysInYear: number;
    readonly hour: number;
    readonly invalidReason: string | null;
    readonly isInDST: boolean;
    readonly isInLeapYear: boolean;
    readonly isOffsetFixed: boolean;
    readonly isValid: boolean;
    readonly locale: string;
    readonly millisecond: number;
    readonly minute: number;
    readonly month: number;
    readonly monthLong: string;
    readonly monthShort: string;
    readonly numberingSystem: string;
    readonly offset: number;
    readonly offsetNameLong: string;
    readonly offsetNameShort: string;
    readonly ordinal: number;
    readonly outputCalendar: string;
    readonly second: number;
    readonly weekNumber: number;
    readonly weekYear: number;
    readonly weekday: number;
    readonly weekdayLong: string;
    readonly weekdayShort: string;
    readonly year: number;
    readonly zoneName: string;

    toFormat(format: string, options?: Object): string;
    toISO(options?: Object): string;
    toISODate(): string;
    toISOTime(options?: Object): string;
    toISOWeekDate(): string;
    toJSDate(): Date;
    toLocal(): DateTime;
    toSQL(): string;
    toUTC(offset?: number, options?: Object): DateTime;

  }

  export interface Zone {

  }

}
