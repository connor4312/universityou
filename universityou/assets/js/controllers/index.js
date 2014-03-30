uniApp.controller('IndexCtrl', ['SubjectFactory','$scope', function(subject_list, $scope) {
    $scope.subjects= [];
    subject_list.all(function (results) {
      $scope.subjects = results;
    })
    }
]);