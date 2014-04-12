CafeSenegal.CafeText = (function() {
	var that = {},
	textArray = [],

	init = function() {
		setText();
		return that;
	},

	setText = function() {
		textArray.push({
			id:"welcome-text", 
			en:"This is not just a Café! Come to speak with local people, learn playing the djembe, get a personal tour guide!", 
			ge:"Willkommen auf dieser herrlichen Seite! Das ist der deutsche Text. Informiert euch bitte ausführlich auf dieser Homepage!!!",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"offer-text",
			en:"What we offer: Apart from an excellent coffee, we can give you individual travel advices, arrange cheap and nice hotels, accompany you on your trips.",
			ge:"Wir bieten viele tolle Sachen an!",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"contact-text",
			en:"Here you can contact us!",
			ge:"Ruf uns an!.",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"references-text",
			en:"Senegal is a country full of different impressions and adventures. Read what other people have experienced!",
			ge:"Irgendwann werden wir berühmt :-)",
			fr:"bienvenue, je ne parle pas francais!"
		});
	},

	getText = function(lang) {
		var text;
		
		if (lang == "en") {
			text = getTextEn();

		} else {
			if(lang == "ge") {
				text = getTextGe();
			} else {
				text = getTextFr();
			}
		}
		return text;
	},


	getTextEn = function() {
		text = [];
		for (var i = 0;  i < textArray.length; i++) {
			text.push(textArray[i].en)
		}
		return text;

	},

	getTextGe = function() {
		text = [];
		for (var i = 0;  i < textArray.length; i++) {
			console.log("textArray[i]: ", textArray[i]);
			text.push(textArray[i].ge)
		}
		return text;

	},

	getTextFr = function() {
		text = [];
		for (var i = 0;  i < textArray.length; i++) {
			text.push(textArray[i].fr)
		}
		return text;

	}



	that.init = init;
	that.getText = getText;

	return that;
}());