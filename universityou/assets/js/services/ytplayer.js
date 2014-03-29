var uniFactories = angular.module('uniFactories', []);


uniFactories.factory('YoutubeService', ['$sce', function ($sce) {

    return function (hash) {
        return $sce.trustAsHtml('<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + hash + '?autoplay=1" frameborder="0"/>');
    };
}]);