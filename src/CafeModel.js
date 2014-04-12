CafeSenegal.CafeModel = (function() {
	var that = {},

	init = function() {
		return that;
	},


	getEnglishText = function() {
		console.log("onengltext");
		var texts = "hello";
		$.getJSON("http://vronizinsser.github.io/res/textes/textes.json?callback=?", function( data ) {	
			setTimeout(function() {console.log("data ", data);	}, 1000);
			texts = data;
			
		});
		console.log("after ", texts);
	}



	that.init = init;
	that.getEnglishText = getEnglishText;

	return that;
}());