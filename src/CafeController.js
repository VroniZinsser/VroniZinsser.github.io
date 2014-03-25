CafeSenegal.CafeController = function() {
	var that = {},
	cafeModel = null,
	cafeView = null,

	init = function() {
		cafeModel = CafeSenegal.CafeModel.init();
		cafeView = CafeSenegal.CafeView.init();

		$(cafeView).on("selectLang", onSelectLang);

	},

	onSelectLang = function(evt, lang) {
		console.log("language: ", lang);
		cafeModel.getEnglishText();
	}

	that.init = init;
	return that;
}();