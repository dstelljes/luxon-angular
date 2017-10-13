declare module "luxon" {

  export class DateTime {
    
    static fromISO(text: string, options?: Object): DateTime;

    readonly invalidReason: string | null;
    readonly isValid: boolean;

  }

}
