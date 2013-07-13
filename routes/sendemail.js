/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
/*
 * GET home page.
 */

exports.index = function (req, res) {
    "use strict";
    var nodemailer = require('nodemailer'),
        smtpTransport = nodemailer.createTransport("mandrill", {
            auth: {
                user: "martin.shaw@akqa.com",
                pass: "PRgF89ZeBH2oJyCBmpNkKQ"
            }
        }),
        fs = require('fs'),
        str = fs.readFileSync('./views/email.ejs', 'utf8'),
        mailOptions = {
            from: "Fred Foo ✔ <sickpuppy@gmail.com>", // sender address
            to: "akqa.hackathon@gmail.com", // list of receivers
            subject: "AKQA hack day test email", // Subject line
            html: str,
            generateTextFromHTML: true
        };
    smtpTransport.sendMail(mailOptions, function (error, response) {
        res.render('emailconfirm', {
            title: 'Send test email',
            layout: 'layout.ejs',
            pagetitle: 'Send a test email'
        });
        if (error) {
            console.log(error);
        } else {
            console.log("Message sent: " + response.message);
        }

        // if you don't want to use this transport object anymore, uncomment following line
        smtpTransport.close(); // shut down the connection pool, no more messages
    });
};