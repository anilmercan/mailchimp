angular.module('YoutubeCtrl', [])
    .controller('YoutubeCtrl', function($scope, $http, $window) {

        $scope.formData = {};
        $scope.showModal= true;
        $scope.genders = [
            {key: "Male", value: "male"},
            {key: "Female", value: "female"},

        ];

        $scope.foo = function(data) {
            $window.open(data);
        };

// when submitting the add form, send the text to the node API
        $scope.createSubscriber = function() {
            $http.post('/youtube/youtubeApi')
                .success(function(data) {


                    data = data.replace(/"/g,"");
                    console.log(data);
                    $scope.foo(data);


                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });

        };

});