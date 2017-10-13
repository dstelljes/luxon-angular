declare module "luxon" {

  export class DateTime {
    
    static fromHTTP(text: string, options?: Object): DateTime;
    static fromISO(text: string, options?: Object): DateTime;
    static fromRFC2822(text: string, options?: Object): DateTime;

    readonly invalidReason: string | null;
    readonly isValid: boolean;

  }

}
