uniApp.controller('CourseCtrl', ['ClassFactory', 'CoursesFactory', '$scope', '$routeParams', 'YoutubeService', 'UserService', function(cls, course, $scope, $routeParams, yt, user) {
        $scope.classes = [];
        $scope.course = null;
        $scope.yt = yt;
        $scope.percent = 0;
        $scope.route = $routeParams;
        $scope.stars = [];
        $scope.current_class = null;

        $scope.nav = function (slug) {
            window.location.hash = '#/' + $scope.route.subject + '/' + $scope.course.slug + '/' + slug;
        };


        course.find({slug: $routeParams.course}, function (result) {
            $scope.course = result;
            for (var i = 0, l = 5; i < l; i++) {
                $scope.stars.push([i < $scope.course.difficulty ? 'star' : 'star-o', i]);
            }

            user.getUser(function (u){
                var progress_index = _.findIndex(u.courses, {course_id: $scope.course.id});
                if (progress_index >= 0) {
                    $scope.current_class = u.courses[progress_index].class_id;
                } else {
                    $scope.current_class = $scope.course.classes['1'];
                }

                cls.all(function (classes) {
                    var index, point, mk = 0;
                    for (var key in $scope.course.classes) {
                        index = _.findIndex(classes, function (c) {
                            return c.id == $scope.course.classes[key];
                        });

                        if (index >= 0) {
                            $scope.classes.push(classes[index]);

                            if (classes[index].id === $scope.current_class) {
                                point = parseInt(key, 10);
                            }
                        }
                        mk = Math.max(mk, parseInt(key, 10));
                    }

                    $scope.percent = Math.round(100 * point / mk);
                });
            });
        });
    }
]);