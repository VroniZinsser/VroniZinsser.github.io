CafeSenegal.CafeText = (function() {
	var that = {},
	textArray = [],

	init = function() {
		setText();
		return that;
	},

	setText = function() {
		textArray.push(
		{
			id:"nav-welcome", 
			en:"Home", 
			ge:"Home",
			fr:"Home"
		},
		{
			id:"nav-offer", 
			en:"Offers", 
			ge:"Angebote",
			fr:"Offertes"
		},
		{
			id:"nav-contact", 
			en:"Contact", 
			ge:"Kontakt",
			fr:"Contact"
		},
		{
			id:"nav-references", 
			en:"References", 
			ge:"Erfahrungen",
			fr:"Rapports"
		},

		{
			id:"text-welcome", 
			en:"This is not just a Café! Come to speak with local people, learn playing the djembe, get a personal tour guide!", 
			ge:"Willkommen auf dieser herrlichen Seite! Das ist der deutsche Text. Informiert euch bitte ausführlich auf dieser Homepage!!!",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"text-offer",
			en:"What we offer: Apart from an excellent coffee, we can give you individual travel advices, arrange cheap and nice hotels, accompany you on your trips.",
			ge:"Wir bieten viele tolle Sachen an!",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"text-contact",
			en:"Here you can contact us!",
			ge:"Ruf uns an!.",
			fr:"bienvenue, je ne parle pas francais!"
		},
		{
			id:"text-references",
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