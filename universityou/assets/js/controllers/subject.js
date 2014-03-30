uniApp.controller('SubCtrl', ['$scope', function($scope) {
        subject_list.find({slug: $routeParams.slug}, function (results) {
            $scope.subjects = results;
            $scope.title = $scope.subjects.title;
            
            subject_list.bindCourses($scope.subjects, function (results) {
                $scope.subjects = results;
            });
        });
    }
]);