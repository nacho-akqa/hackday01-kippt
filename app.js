/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
(function () {
    "use strict";
    var kippt = require('node-kippt'),
        express = require('express'),
        path = require('path'),
        http = require('http'),
        expressLayouts = require('express-ejs-layouts'),
        app = express(),

        // Global Application settings
        AppConfig = require('./bin/app_config'),

        // Kippt Clips
        Kippt = require('./bin/kippt_clips'),

        startup = require('./bin/startup'),

        // Email Template and dummy html
        emailTemplates = require('./bin/templates'),
        html = emailTemplates.templates.compileTemplate(),

        // ROUTES OBJECTS
        sendemail = require('./routes/sendemail');

    // Testing templates
    console.log(html);

    // A collection of Clips from Kippt
    var api = new Kippt.KipptClips().getClips();

    //var Clips = Kippt.KipptClips.init();
    app.configure(function () {
        app.set('views', __dirname + '/views');
        app.set('port', AppConfig.AppConfig.Express.PORT);
        app.set('view engine', 'ejs');
        app.use(expressLayouts);
        app.use(express.static(path.join(__dirname, 'public')));
        app.use(app.router);
    });
    app.configure('development', function () {
        app.use(express.errorHandler());
    });

    // ROUTES
    app.get('/sendemail', sendemail.index);
    app.get('/', sendemail.index);
    startup.start(process.argv, function(){console.log('I iz callback');});
    http.createServer(app).listen(app.get('port'), function () {
        console.log("Express server listening on port " + app.get('port'));
    });
}());
