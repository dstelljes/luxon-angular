declare module "luxon" {

  export class DateTime {
    
    static fromHTTP(text: string, options?: Object): DateTime;
    static fromISO(text: string, options?: Object): DateTime;
    static fromRFC2822(text: string, options?: Object): DateTime;
    static fromString(text: string, format: string, options?: Object): DateTime;
    
    readonly invalidReason: string | null;
    readonly isValid: boolean;

    toISO(options?: Object): string;
    toISODate(): string;
    toISOTime(options?: Object): string;
    toISOWeekDate(): string;

  }

}
