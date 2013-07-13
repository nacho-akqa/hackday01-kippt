var map_and_filter = require("../bin/map_and_filter"),
	maf_test_samples = require("./test_samples/map_and_filter-samples");

describe("Mapping and filtering of JSON input",function(){
	var samples;
	
	beforeEach(function(){
		samples = maf_test_samples();
	});
	
	it("Should map one object correctly", function() {
		// When
		var mapped_and_filtered = map_and_filter(samples.oneObjectToMapAndFilter);

		// Then
		expect(mapped_and_filtered).toMatch(samples.oneObjectMappedAndFiltered);
	});
	
	it("Should map three objects correctly", function() {
		// When
		var mapped_and_filtered = map_and_filter(samples.threeObjectsToMapAndFilter);

		// Then
		expect(mapped_and_filtered).toMatch(samples.threeObjectsMappedAndFiltered);
	});
});
