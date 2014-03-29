uniApp.factory('SubjectFactory', ['$http', function ($http) {
    var subject_list;

    var subjects = function (cb) {
        if (subject_list) {
            return cb(subject_list);
        }

        return $http.get('api/subjects')
            .success(function(results) {
                subject_list = results;
                cb(subject_list);
            });
    };

    return {
        all: function (callback) {
            return subjects(callback);
        },
        find: function (where, callback) {
            return subjects(function (subs) {
                var index = _.findIndex(subs, where);
                callback(index >= 0 ? subs[index] : []);
            });
        },
        children: function (where, callback) {
            return subjects(function (subs) {
                var index = _.findIndex(subs, where);
                if (index < 0) {
                    callback([]);
                }

                return _.remove(subs, function (child) {
                    return _.findIndex(subs[index].children, child.id) >= 0;
                });
            });
        }
    };
}]);