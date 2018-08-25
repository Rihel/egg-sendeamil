import { EmailOption } from "./app/extend/application";
import { SmtpOptions } from "nodemailer-smtp-transport";

declare module 'egg' {
  interface Application{
    sendEmail(option:EmailOption):Promise<any>
  }
  interface EggAppConfig{
    sendEmail:SmtpOptions
  }
}