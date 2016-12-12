angular.module('FacebookService', []).service('FacebookService', ['$http', function($http) {

    this.hello=function(){
        console.log('Hello world')
    }

}]);