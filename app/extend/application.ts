import * as nodemailer  from'nodemailer'
import * as smtpTransport from 'nodemailer-smtp-transport'
import { Application } from 'egg'
export interface EmailOption {
  to : string;
  subject : string;
  text?: string;
  html?: string;
}
export default {
  sendEmail(this:Application,option : EmailOption){
    return new Promise((resolve, reject) => {
      let transporter = nodemailer.createTransport(smtpTransport(this.config.sendEmail))
      const mailOptions = {
        from: this.config.auth.user,
        to: option.to,
        subject: option.subject,
        text: option.text,
        html: option.html
      };
      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          reject(error);
        }
        resolve(info.response);
      });
    });
  }
}