CafeSenegal.CafeView = (function() {

	var that = {},
	$flagEn = $("#flag-english"),
	$flagGe = $("#flag-german"),
	$flagFr = $("#flag-france"),

	init = function() {

		$flagEn.on("click", onFlagEnClicked);
		$flagGe.on("click", onFlagGeClicked);
		$flagFr.on("click", onFlagFrClicked);
		return that;


	},

	onFlagEnClicked = function() {
		 $(that).trigger("selectLang", "en");
	},

	onFlagGeClicked = function() {
		 $(that).trigger("selectLang", "ge");
	},

	onFlagFrClicked = function() {
		 $(that).trigger("selectLang", "fr");
	}


	that.init = init;
	return that;
}());