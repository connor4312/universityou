var uniFactories = angular.module('uniFactories', []);


uniFactories.factory('UserFactory', ['$http', function ($http) {
    var currentUser;

    var basicReq = function (url, data) {
        return $http.post(url, data.user)
            .success(function(results) {
                currentUser = results;
                data.success(results);
            })
            .error(data.error || function(){})
            .finally(data.finally || function(){});
    };

    return {
        login: function (data) {
            return basicReq('api/auth', data);
        },
        register: function (data) {
            return basicReq('api/auth/create', data);
        },
        watched: function (data) {
            return basicReq('api/auth/watched', data);
        },
        getUser: function (callback) {
            if (currentUser) {
                return callback(currentUser);
            }

            return $http
                .get('api/auth')
                .success(function(results) {
                    currentUser = results;
                    callback(results);
                })
                .error(callback(false));
        }
    };
}]);