angular.module('sampleApp',
    ['ngRoute', 'appRoutes',
        'MainCtrl',
        'FacebookCtrl', 'FacebookService',
        'MailChimpCtrl', 'MailChimpService',
        'TwitterCtrl', 'TwitterService',
        'YoutubeCtrl', 'YoutubeService',
        'SendyCtrl', 'SendyService'
    ]);