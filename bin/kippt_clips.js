/*jshint bitwise:false, curly:true, eqeqeq:true, forin:true, immed:true, latedef:true, newcap:true, noarg:true, noempty:false, nonew:true, plusplus:false, regexp:false, undef:true, strict:true, trailing:true, expr:true, regexdash:true, browser:true, jquery:true, onevar:true */
/*global require:false, process:false, console:false, __dirname:false, exports:false */
    var nodeKippt = require('node-kippt');
    var Config = require('../bin/app_config');


    exports.KipptClips = function() {
            // The Api for interacting with Kippt
            // https://npmjs.org/package/node-kippt
        var KipptApi = {},
            // The Json Representation of the returned Kippt data
            Clips = {};

        function authenticateWithService(username, apiToken) {

            var username = username || 'akqa',
                apiToken = apiToken || '3076c399fb4c7c337f5b3499ce6c3854658a4cc0';

            KipptApi = new nodeKippt.KipptAPI({
              username: username,
              api_token: apiToken
            });

            //Get Clips
            return KipptApi;

        }

        function getSinceDate(days) {
            var now = new Date(0);
            return new Date().setDate(now.getDate()-(days || 7)).toString();
        }

        function getClips(callback) {
            var api = authenticateWithService(),
                date = getSinceDate(7);
            api.clips.all({
                since: '1372857511'
                }, function(error, data) {
                  if(!error) {
                    if(callback) {
                        callback(data);
                    }
                   }
                });
        }

        return {
            getClips: getClips
        };
    };

