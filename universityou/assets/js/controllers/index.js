uniApp.controller('IndexCtrl', ['SubjectFactory', '$scope', function(subject_list, $scope) {
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