uniApp.factory('UserService', ['$http', function ($http) {
    var currentUser;
    var listeners = [];

    var basicReq = function (url, data) {
        return $http.post(url, data.user)
            .success(function(results) {
                currentUser = results;
                data.success(results);

                for (var i = 0, l = listeners.length; i < l; i++) {
                    listeners[i](results);
                }
            })
            .error(data.error || function(){})
            .finally(data.finally || function(){});
    };
    
    var getUser = function (callback) {
        if (currentUser) {
            return callback(currentUser);
        }

        return $http
            .get('api/user')
            .success(function(results) {
                currentUser = results;
                callback(results);
            })
            .error(function () {
                callback(false);
            });
    };

    return {
        login: function (data) {
            return basicReq('api/user', data);
        },
        register: function (data) {
            return basicReq('api/user/create', data);
        },
        watched: function (data) {
            return basicReq('api/user/watched', data);
        },
        getUser: getUser,
        getUserAndListen: function (callback) {
            getUser(callback);
            listeners.push(callback);
        }
    };
}]);