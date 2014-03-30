uniApp.controller('SubCtrl', ['$scope', '$routeParams', 'SubjectFactory', 'CoursesFactory', 'YoutubeService', function($scope, $routeParams, subject_list, course_list, yt) {
        $scope.subject = null;
        $scope.total_duration = 0;
        $scope.yt = yt;

        subject_list.find({slug: $routeParams.subject}, function (results) {
            $scope.subject = results;
            
            subject_list.bindCourses($scope.subject, function (results) {
                $scope.subject = results;

                course_list.bindClasses($scope.subject.courses, function (results) {
                    $scope.subject.courses = results;
                    for (var n = 0, k = $scope.subject.courses.length; n < k; n++){
                        $scope.subject.courses[n].total_duration = 0;
                        for (var i = 0, l = $scope.subject.courses[n].classes.length; i < l; i++) {
                            $scope.subject.courses[n].total_duration += $scope.subject.courses[n].classes[i].duration;
                            $scope.total_duration += $scope.subject.courses[n].classes[i].duration;
                        }
                    }
                });
            });
        });
    }
]);