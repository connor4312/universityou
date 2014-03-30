uniApp.controller('IndexCtrl', ['SubjectFactory', '$scope', '$routeParams', function(subject_list, $scope, $routeParams) {
        $scope.subjects = [];
        $scope.title = 'All Subjects';

        subject_list.all(function (results) {
            $scope.subjects = results;

            subject_list.bindCourses($scope.subjects, function (results) {
                $scope.subjects = results;
            });
        });
    }
]);