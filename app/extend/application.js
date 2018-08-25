"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
exports.default = {
    sendEmail(option) {
        return new Promise((resolve, reject) => {
            let transporter = nodemailer.createTransport(smtpTransport(this.config.sendEmail));
            const mailOptions = {
                from: this.config.sendEmail.auth.user,
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
};
