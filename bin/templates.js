
exports.templates = (function() {
    var ejs = require('ejs'),
        fs = require('fs'),
        config = require('../bin/app_config');
        defaultPath = config.AppConfig.Templates.path,
        defaultTemplate = config.AppConfig.Templates.template,
        mockData = {
            clips: [{
                "title": "Nodemailer",
                "app_url": "/AKQA/akqa-web-development/clips/15615431",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "https://github.com/andris9/Nodemailer",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615431/"
            }, {
                "title": "Timers Node.js v0.10.13 Manual & Documentation",
                "app_url": "/AKQA/akqa-web-development/clips/15615286",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "http://nodejs.org/docs/v0.10.13/api/timers.html",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615286/"
            },{
                "title": "Nodemailer",
                "app_url": "/AKQA/akqa-web-development/clips/15615431",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "https://github.com/andris9/Nodemailer",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615431/"
            }, {
                "title": "Timers Node.js v0.10.13 Manual & Documentation",
                "app_url": "/AKQA/akqa-web-development/clips/15615286",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "http://nodejs.org/docs/v0.10.13/api/timers.html",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615286/"
            },{
                "title": "Nodemailer",
                "app_url": "/AKQA/akqa-web-development/clips/15615431",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "https://github.com/andris9/Nodemailer",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615431/"
            }, {
                "title": "Timers Node.js v0.10.13 Manual & Documentation",
                "app_url": "/AKQA/akqa-web-development/clips/15615286",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "http://nodejs.org/docs/v0.10.13/api/timers.html",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615286/"
            }, {
                "title": "Timers Node.js v0.10.13 Manual & Documentation",
                "app_url": "/AKQA/akqa-web-development/clips/15615286",
                "full_name": "Scott van Looy",
                "created": 1373709929,
                "url": "http://nodejs.org/docs/v0.10.13/api/timers.html",
                "notes": "",
                "list": "/api/lists/318394/",
                "resource_uri": "/api/clips/15615286/"
            }]
        };

    function compileTemplate(data, template, path) {
        var str,
            html;

        data = data || mockData;
        template = template || defaultTemplate;
        path = path || defaultPath;

        str = fs.readFileSync(path + template, 'utf8'),
        html = ejs.render(str, mockData);

        // console.log(html);
        return html;
    }

    return {
        compileTemplate: compileTemplate
    }

}());
