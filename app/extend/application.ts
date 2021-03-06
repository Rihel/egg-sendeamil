import { EmailOption } from './../../index.d';
import * as nodemailer  from'nodemailer'
import * as smtpTransport from 'nodemailer-smtp-transport'
import wellknown =  require('nodemailer-wellknown')
import { Application } from 'egg'

export = {
  sendEmail(this:Application,option : EmailOption){
    return new Promise((resolve, reject) => {
      const { auth, service }  = this.config.sendEmail;
      const config:any = wellknown(service)
      config.auth = auth;
      let transporter = nodemailer.createTransport(smtpTransport(config))
      const mailOptions = {
        from: `${option.from}<${config.auth.user}>`,
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