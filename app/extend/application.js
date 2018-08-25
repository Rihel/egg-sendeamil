"use strict";
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const wellknown = require("nodemailer-wellknown");
module.exports = {
    sendEmail(option) {
        return new Promise((resolve, reject) => {
            const { auth, service } = this.config.sendEmail;
            const config = wellknown(service);
            config.auth = auth;
            let transporter = nodemailer.createTransport(smtpTransport(config));
            const mailOptions = {
                from: config.auth.user,
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
