exports.start = function(args, callBack) {

	// consts
	var MANUAL_DELAY = 5,
		DAYS_OF_WEEK = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	
	// dependencies
	var schedule = require('node-schedule');
	var config = require('../bin/app_config').AppConfig;
	
	console.log(args);
	
	// vars
	var isManualMode = (args.indexOf('manual') > -1),
		rule = new schedule.RecurrenceRule(),
		nextRun = {};
	
	console.log("Starting up!");
	
	if (isManualMode) {
		console.log("Running Manual Mode");
		
		nextRun = new Date(new Date().getTime() + (MANUAL_DELAY * 1000));
	
		console.log("Next run at " + nextRun.toString());
	} else {
		console.log("Running Schedule Mode");
		
		nextRun = config.Scheduler;
		
		console.log(config);
		
		console.log("Next run at " + DAYS_OF_WEEK[nextRun.dayOfWeek] + ' at ' + nextRun.hour + ':' + nextRun.minute);
	}

	schedule.scheduleJob(nextRun, function(){
		console.log('Scheduled task fired');
		if(callBack){
			console.log("Executing callback");
			callBack();
		} else {
			console.log("No callback specified");
		}
	});
};
