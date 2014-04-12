CafeSenegal.CafeController = function() {
	var that = {},
	cafeModel = null,
	cafeView = null,
	cafeText = null,

	init = function() {
		cafeModel = CafeSenegal.CafeModel.init();
		cafeView = CafeSenegal.CafeView.init();
		cafeText = CafeSenegal.CafeText.init();


		$(cafeView).on("selectLang", onSelectLang);

	},

	onSelectLang = function(evt, lang) {
		console.log("language: ", lang);		
		cafeView.setLang(lang);
		cafeView.setText(cafeText.getText(lang));
	}

	that.init = init;
	return that;
}();