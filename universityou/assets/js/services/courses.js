uniApp.factory('CoursesFactory', ['$http', 'ClassFactory', function ($http, class_list) {
    var course_list;

    var courses = function (cb) {
        if (course_list) {
            return cb(_.clone(course_list, true));
        }

        return $http.get('api/courses')
            .success(function(results) {
                course_list = results;
                cb(_.clone(course_list, true));
            });
    };

    var bind = function (course, classes) {
        newclasses = [];
        for (var i = 0, l = classes.length; i < l; i++) {
            key = _.findKey(course.classes, function (c) {
                return c == classes[i].id;
            });
            if (key) {
                newclasses.push(classes[i]);
            }
        }
        course.classes = newclasses;
        return course;
    };

    return {
        all: function (callback) {
            return courses(callback);
        },
        bindClasses: function (course, callback) {
            class_list.all(function (classes) {
                if (_.isArray(course)) {
                    for (var i = 0, l = course.length; i < l; i++) {
                        course[i] = bind(course[i], classes);
                    }
                } else {
                    course = bind(course, classes);
                }

                callback(course);
            });
        },
        find: function (where, callback) {
            return courses(function (subs) {
                var index = _.findIndex(subs, where);
                callback(index >= 0 ? subs[index] : []);
            });
        }
    };
}]);