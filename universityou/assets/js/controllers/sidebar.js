uniApp.controller('SidebarCtrl', ['SubjectFactory', '$scope', function(subject, $scope) {
        $scope.subjects = [];
        subject.all(function (results) {
            $scope.subjects = results;
        });
    }
]);