uniApp.controller('ClassCtrl', ['ClassFactory', 'CoursesFactory', '$scope', '$routeParams', 'YoutubeService', function(cls, course, $scope, $routeParams, yt) {
        $scope.cls = null;
        $scope.course = null;
        $scope.yt = yt;

        cls.find({slug: $routeParams.class}, function (results) {
            $scope.cls = results;

            course.find({slug: $routeParams.course}, function (results) {
                $scope.course = results;
                $scope.course.related = [];

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