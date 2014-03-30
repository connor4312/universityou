uniApp.factory('ClassFactory', ['$http', function ($http) {
    var class_list;

    var classes = function (cb) {
        if (class_list) {
            return cb(class_list);
        }

        return $http.get('api/classes')
            .success(function(results) {
                class_list = results;
                cb(class_list);
            });
    };

    return {
        all: function (callback) {
            return classes(callback);
        },
        find: function (where, callback) {
            return classes(function (subs) {
                var index = _.findIndex(subs, where);
                callback(index >= 0 ? subs[index] : []);
            });
        }
    };
}]);