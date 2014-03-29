var uniControllers = angular.module('uniControllers', [
    'uniFactories'
]);

uniControllers.controller('IntroCtrl', ['YoutubeService', '$scope', function(yt, $scope) {
        $scope.yt = yt;
    }
]);