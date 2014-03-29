uniApp.factory('CoursesFactory', ['$http', function ($http) {
    var course_list;

    var courses = function (cb) {
        if (course_list) {
            return cb(course_list);
        }

        return $http.post('api/courses', data.user)
            .success(function(results) {
                course_list = results;
                cb(course_list);
            });
    };

    return {
        all: function (callback) {
            return courses(callback);
        },
        find: function (id, callback) {
            return courses(function (subs) {
                var index = _.findIndex(subs, {id: id});
                callback(index >= 0 ? subs[index] : []);
            });
        }
    };
}]);