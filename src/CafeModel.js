CafeSenegal.CafeModel = (function() {
	var that = {},

	init = function() {
		return that;
	},


	getEnglishText = function() {
		$.getJSON( "src/textes.json", function( data ) {		
			var temp = _.where(data, {"id": "welcome-text"});
			console.log("text: ", temp.en);
		});
	}



	that.init = init;
	that.getEnglishText = getEnglishText;

	return that;
}());