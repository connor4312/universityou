uniApp.controller('AuthCtrl', ['UserService', '$scope', '$location', function(user, $scope, $location) {
        $scope.user = {};
        $scope.message = null;
        $scope.login = function () {
            user.login({
                user: $scope.user,
                success: function () {
                    $location.path('/');
                },
                error: function () {
                    $scope.message = ['danger', 'Invalid email or password'];
                }
            });
        };
        $scope.register = function () {
            user.register({
                user: $scope.user,
                success: function () {
                    $location.path('/');
                },
                error: function () {
                    $scope.message = ['danger', 'Please be sure you entered information for all fields and your email is valid.'];
                }
            });
        };
    }
]);