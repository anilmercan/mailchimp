angular.module('SendyService', []).service('SendyService', ['$http', function($http) {

    this.hello=function(){
        console.log('Hello world')
    }

}]);