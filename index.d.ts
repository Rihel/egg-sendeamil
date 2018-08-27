
import { SmtpOptions } from "nodemailer-smtp-transport";
type stmpKey = '126'|'163'|'1und1'|'AOL'|'DebugMail'|'DynectEmail'|'FastMail'|'GandiMail'|'Gmail'|'Godaddy'|'GodaddyAsia'|'GodaddyEurope'|'hot.ee'|'Hotmail'|'iCloud'|'mail.ee'|'Mail.ru'|'Maildev'|'Mailgun'|'Mailjet'|'Mailosaur'|'Mandrill'|'Naver'|'OpenMailBox'|'Outlook365'|'Postmark'|'QQ'|'QQex'|'SendCloud'|'SendGrid'|'SendinBlue'|'SES'|'SES-US-EAST-1'|'SES-US-WEST-2'|'SES-EU-WEST-1'|'Sparkpost'|'Yahoo'|'Yandex'|'Zoho'|'qiye.aliyun'
export interface EmailOption {
  from: string,
  to : string;
  subject : string;
  text?: string;
  html?: string;
}
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
