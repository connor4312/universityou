uniApp.controller('SubCtrl', ['$scope', function($scope) {
    $scope.subjects= [];
    subSubject_list.all(function (results) {
      $scope.subjects = results;
    })
    }
]);