
angular.module('FacebookCtrl', ['facebook'])
    .config([
    'FacebookProvider',
    function(FacebookProvider) {
        var myAppId = '1201626679916037';

        // You can set appId with setApp method
        // FacebookProvider.setAppId('myAppId');
        /**
         * After setting appId you need to initialize the module.
         * You can pass the appId on the init method as a shortcut too.
         */
        FacebookProvider.init(myAppId);
    }
])

.controller('FacebookCtrl', [
            '$scope',
            '$timeout',
            'Facebook',
            function($scope, $timeout, Facebook) {



    // Define user empty data :/
    $scope.user = {};
    $scope.accessToken={};
    $scope.accessTokenFromUrl={};
    // Defining user logged status
    $scope.logged = false;

    // And some fancy flags to display messages upon user status change
    $scope.byebye = false;
    $scope.salutation = false;

    $scope.tagline = 'Facebook Controller';



    /**
     * Watch for Facebook to be ready.
     * There's also the event that could be used
     */
    $scope.$watch(
        function() {
            return Facebook.isReady();
        },
        function(newVal) {
            if (newVal)
                $scope.facebookReady = true;
        }
    );

    var userIsConnected = false;

    Facebook.getLoginStatus(function(response) {
        if (response.status == 'connected') {
            userIsConnected = true;
            Facebook.logout(function(response){
                console.log(response);
                userIsConnected=false;
            });
        }
    });


        /**
         * IntentLogin
         */
        $scope.IntentLogin = function() {
            if(!userIsConnected) {
                $scope.login();
            }
        };

        /**
         * Login
         */
        $scope.login = function() {
            Facebook.login(function(response) {
                if (response.status == 'connected') {
                    $scope.logged = true;
                    $scope.accessToken=response.authResponse.accessToken;
                    $scope.me();
                }

            },{
                auth_type: 'rerequest',
                scope: 'user_likes, email, user_friends,publish_pages'
            });
        };

        /**
         * me
         */
        $scope.me = function() {
            Facebook.api('/me', function(response) {
                /**
                 * Using $scope.$apply since this happens outside angular framework.
                 */
                $scope.$apply(function() {
                    console.log(response)
                    $scope.user = response;
                });

            });

            Facebook.api('/me/friends', function(response) {
                $scope.$apply(function () {
                    $scope.myFriends = response.data;
                    console.log($scope.myFriends);
                });
            });







        };

        /**
         * Logout
         */
        $scope.logout = function() {
            Facebook.logout(function() {
                $scope.$apply(function() {
                    $scope.user   = {};
                    $scope.logged = false;
                });
            });
        }



        $scope.share = function() {



            var body = 'Test 2 ';
            Facebook.api('me/photos', 'post',
                {
                    caption: "Hello World",
                    url: "http://g-ecx.images-amazon.com/images/G/01/img15/pet-products/small-tiles/23695_pets_vertical_store_dogs_small_tile_8._CB312176604_.jpg",
                    access_token:$scope.accessToken
                }

                , function (res) {
                    if(!res || res.error) {
                        console.log(!res ? 'error occurred' : res.error);
                        return;
                    }
                    console.log('Post Id: ' + res.id);
                });



        };



        /**
         * Taking approach of Events :D
         */
        $scope.$on('Facebook:statusChange', function(ev, data) {
            console.log('Status: ', data);

            if (data.status == 'connected') {
                $scope.$apply(function() {
                    $scope.salutation = true;
                    $scope.byebye     = false;
                });
            } else {
                $scope.$apply(function() {
                    $scope.salutation = false;
                    $scope.byebye     = true;

                    // Dismiss byebye message after two seconds
                    $timeout(function() {
                        $scope.byebye = false;
                    }, 2000)
                });
            }


        });


            }
    ])