uniApp.factory('SubjectFactory', ['$http', 'CoursesFactory', function ($http, course) {
    var subject_list;

    var subjects = function (cb) {
        if (subject_list) {
            return cb(_.clone(subject_list, true));
        }

        return $http.get('api/subjects')
            .success(function(results) {
                subject_list = results;
                cb(_.clone(subject_list, true));
            });
    };

    var bind = function (sub, courses) {
        newcourses = [];
        for (var i = 0, l = courses.length; i < l; i++) {
            index = _.findIndex(sub.courses, function (c) {
                return c == courses[i].id;
            });
            if (index >= 0) {
                newcourses.push(courses[i]);
            }
        }
        sub.courses = newcourses;
        return sub;
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
        bindCourses: function (subs, callback) {
            course.all(function (courses) {
                if (_.isArray(subs)) {
                    for (var i = 0, l = subs.length; i < l; i++) {
                        subs[i] = bind(subs[i], courses);
                    }
                } else {
                    subs = bind(subs, courses);
                }

                callback(subs);
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