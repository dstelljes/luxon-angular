declare module "luxon" {

  export class DateTime {

    static fromHTTP(text: string, options?: Object): DateTime;
    static fromISO(text: string, options?: Object): DateTime;
    static fromJSDate(date: Date | any, options?: Object): DateTime;
    static fromMillis(milliseconds: number, options?: Object): DateTime;
    static fromRFC2822(text: string, options?: Object): DateTime;
    static fromString(text: string, format: string, options?: Object): DateTime;

    readonly invalidReason: string | null;
    readonly isValid: boolean;
    readonly zoneName: string;

    toFormat(format: string, options?: Object): string;
    toISO(options?: Object): string;
    toISODate(): string;
    toISOTime(options?: Object): string;
    toISOWeekDate(): string;
    toJSDate(): Date;
    toLocal(): DateTime;
    toUTC(offset?: number, options?: Object): DateTime;

  }

  export interface Zone {

  }

}
