angular.module('TwitterCtrl', [])
    .controller('TwitterCtrl', function($scope,$http,$window) {


    $scope.tagline = 'Twitter Controller';
        $scope.login = function () {

            $window.open('/auth/twitter');
        }
        //on button click
        $scope.loginForm = $scope.login;

});