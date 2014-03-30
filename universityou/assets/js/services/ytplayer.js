uniApp.factory('YoutubeService', ['$sce', function ($sce) {
    var opts;

    return {
        show: function (hash, params) {
            var str = 'autoplay=1&version=3&hl=en_US&enablejsapi=1';
            if (params) {
                for (var key in params) {
                    str += '&' + key + '=' + params[key];
                }
            }
            return $sce.trustAsHtml('<object width="640" height="390" id="player">' +
                '<param name="movie" value="//www.youtube.com/v/h1vOoy7fEF0?version=3&amp;hl=en_US"></param>' +
                '<param name="allowFullScreen" value="true"></param>' +
                '<param name="allowscriptaccess" value="always"></param>' +
                '<embed src="//www.youtube.com/v/' + hash + '?' + str + '" type="application/x-shockwave-flash" width="640" height="390" allowscriptaccess="always" allowfullscreen="true"></embed>' +
            '</object>');
        },
        ready: function(callback, data) {
            window.onYouTubePlayerReady = function () {
                callback($('#player embed')[0]);
            };
        }
    };
}]);
