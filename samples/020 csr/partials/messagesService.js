var messagesService = angular.module('MessagesService', []);

messagesService.value('messages', [
	{ 
		id: 1,
		title: 'Hello From Linz',
		body: 'At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren'
	},
	{
		id: 2,
		title: 'Hello From Vienna',
		body: ' sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dol'
	},
	{
		id: 3,
		title: 'Hello From Graz',
		body: ' sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren'
	},
]);
