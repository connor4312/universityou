uniApp.factory('CoursesFactory', ['$http', function ($http) {
    var course_list;

    var courses = function (cb) {
        if (course_list) {
            return cb(course_list);
        }

        return $http.get('api/courses')
            .success(function(results) {
                course_list = results;
                cb(course_list);
            });
    };

    return {
        all: function (callback) {
            return courses(callback);
        },
        find: function (where, callback) {
            return courses(function (subs) {
                var index = _.findIndex(subs, where);
                callback(index >= 0 ? subs[index] : []);
            });
        }
    };
}]);