angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainController'
		})

		.when('/facebook', {
			templateUrl: 'views/facebook.html',
			controller: 'FacebookCtrl'
		})
		.when('/youtube', {
			templateUrl: 'views/youtube.html',
			controller: 'YoutubeCtrl'
		})
		.when('/twitterPage', {
			templateUrl: 'views/twitter.html',
			controller: 'TwitterCtrl'
		})
		.when('/mailchimp', {
			templateUrl: 'views/mailchimp.html',
			controller: 'MailChimpCtrl'
		})
		.when('/sendyPage', {
			templateUrl: 'views/sendy.html',
			controller: 'SendyCtrl'
		});

	$locationProvider.html5Mode(true);

}]);