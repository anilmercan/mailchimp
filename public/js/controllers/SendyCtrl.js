angular.module('SendyCtrl', [])
    .controller('SendyCtrl', function($scope,$http) {

        $scope.formData = {};
        $scope.showModal= true;
        $scope.genders = [
            {key: "Male", value: "male"},
            {key: "Female", value: "female"},

        ];

// when submitting the add form, send the text to the node API
        $scope.createSubscriber = function() {
            $http.post('/sendy/api', $scope.formData)
                .success(function(data) {
                    $scope.formData = {}; // clear the form so our user is ready to enter another
                    console.log(data);
                    if(data){
                        $scope.showModal=true;
                    }
                })
                .error(function(data) {
                    console.log('Error: ' + data);
                });
        };





    });


