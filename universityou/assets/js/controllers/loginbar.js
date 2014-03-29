uniApp.controller('LoginbarCtrl', ['UserService', '$scope', function(user, $scope) {
        $scope.logged = false;
        $scope.user = {};
        
        user.getUser(function (user) {
            if (user) {
                $scope.logged = true;
                $scope.user = {};
            }
        });
    }
]);