if (Posts.find().count() === 0) {
	Posts.insert({
		title: 'Introducing Telescope',
		url: 'http://sachagreif.com/introducing-telescope/',
		author: 'Miguel Machicado',
		flagged: false
	});
	Posts.insert({
		title: 'Algoritmos EMI La Paz',
		url: 'http://www.algoritmos-emi-lp.appspot.com',
		author: 'Jose Machicado',
		flagged: true
	});
	Posts.insert({
		title: 'Meteor',
		url: 'http://meteor.com',
		author: 'Miguel Machicado',
		flagged: false
	});
	Posts.insert({
		title: 'The Meteor Book',
		url: 'http://themeteorbook.com',
		author: 'Miguel Machicado',
		flagged: false
	});
	Posts.insert({
		title: 'Algoritmos EMI',
		url: 'http://www.algoritmos-emi-cbba.appspot.com',
		author: 'Jose Machicado',
		flagged: true
	});
}