module.exports = (function(input){
	var parsed,
	    clips = [],
	    mappedAndFiltered,
	    filtered,
		mapping,
		objects,
		arrayify;
	
	mapping = function(input){
		var output = {
	  		"app_url": input.app_url,
	  		"full_name": input.user.full_name,
	  		"created": input.created,
	  		"url": input.url,
	  		"notes": input.notes,
	  		"list": input.list,
	  		"resource_uri": input.resource_uri
		}
		return output;
	};
	
	arrayify = function(input){
		var output = [];
		for (var key in input) {
			output.push(input[key]);
		}
		return output;
	};
	
	parsed = JSON.parse(input);
	console.log("JSON parsed into object.");
	
	objects = parsed.objects;
	console.log("Clip objects extracted from raw Kippt object.");
	
	clips = arrayify(objects);
	console.log("Clip objects arrayified.");
	
	mappedAndFiltered = clips.map(mapping);
	console.log("Mapping and filtering complete.");

	return mappedAndFiltered;
});
