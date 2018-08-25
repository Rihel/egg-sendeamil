import { EmailOption } from "./app/extend/application";
import { SmtpOptions } from "nodemailer-smtp-transport";
import { stmpKey } from "nodemailer-wellknown";

declare module 'egg' {
  interface Application{
    sendEmail(option:EmailOption):Promise<any>
  }
  interface EggAppConfig{
    sendEmail:{
      service: stmpKey,
      auth: {
        user?:string;
        pass?:string;
      }
    }
  }
}
