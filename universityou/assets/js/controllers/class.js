uniApp.controller('ClassCtrl', ['ClassFactory', 'CoursesFactory', '$scope', '$routeParams', 'YoutubeService', 'UserService', function(cls, course, $scope, $routeParams, yt, user) {
        $scope.cls = null;
        $scope.course = null;
        $scope.yt = yt;

        var _user, _player;
        var seek = _.after(3, function () {
            index = _.findIndex(_user.courses, {course_id: $scope.course.id});
            if (index >= 0) {
                setTimeout(function() {_player.seekTo(_user.courses[index].time, true);}, 500);
            }

            if (_user) setInterval(function () {
                user.watched({
                    user: {
                        course_id: $scope.course.id,
                        class_id: $scope.cls.id,
                        time: Math.floor(_player.getCurrentTime())
                    },
                    success: function () {}
                });
            }, 10000);
        });

        yt.ready(function(player) {
            _player = player;
            seek();
        });

        user.getUser(function (u){
            _user = u;
            seek();
        });


        cls.find({slug: $routeParams.class}, function (results) {
            $scope.cls = results;

            course.find({slug: $routeParams.course}, function (results) {
                $scope.course = results;
                $scope.course.related = [];
                seek();

                cls.all(function (classes) {
                    for (var key in $scope.course.classes) {
                        index = _.findIndex(classes, function (c) {
                            return c.id == $scope.course.classes[key];
                        });

                        if (index >= 0) {
                            $scope.course.related.push(classes[index]);
                        }
                    }
                });
            });
        });

    }
]);