CafeSenegal.CafeView = (function() {

	var that = {},
	actualLanguage = "en",
	$flagEn = $("#flag-english"),
	$flagGe = $("#flag-german"),
	$flagFr = $("#flag-france"),

	init = function() {

		console.log($flagEn[0].style);

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
		 
	},

	setLang = function(lang) {
		$flagEn.attr("src", "res/images/flagEnglishDark.jpg");
		$flagGe.attr("src", "res/images/flagGermanDark.jpg");
		$flagFr.attr("src", "res/images/flagFranceDark.jpg");

		if(lang == "en") {
			$flagEn.attr("src", "res/images/flagEnglishLight.jpg");
		} else {
			if(lang == "ge") {
				$flagGe.attr("src", "res/images/flagGermanLight.jpg");
			} else {
				$flagFr.attr("src", "res/images/flagFranceLight.jpg")
			}
		}
		
		console.log("obj: ", $("#offers-text"));
		console.log("welcome: ", $("#welcome-text"));

	},

	setText = function(text) {
		$(".nav-home").text(text[0]);
		$(".nav-offers").text(text[1]);
		$(".nav-contact").text(text[2]);
		$(".nav-references").text(text[3]);
		$("#welcome-text").text(text[4]);
		console.log("text: ", text);
	}



	that.init = init;
	that.setLang = setLang;
	that.setText = setText;
	return that;
}());