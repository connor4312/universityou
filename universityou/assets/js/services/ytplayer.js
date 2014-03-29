uniApp.factory('YoutubeService', ['$sce', function ($sce) {

    return function (hash, params) {
        var str = 'autoplay=1';
        if (params) {
            for (var key in params) {
                str += '&' + key + '=' + params[key];
            }
        }
        return $sce.trustAsHtml('<iframe id="ytplayer" type="text/html" width="640" height="390" src="http://www.youtube.com/embed/' + hash + '?' + str + '" frameborder="0"/>');
    };
}]);