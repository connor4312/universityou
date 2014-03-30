var uniApp = angular.module('uniApp', [
    'ngRoute'
]);

uniApp.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider.when('/intro', {
            templateUrl: 'partial/intro.html',
            controller: 'IntroCtrl'
        }).when('/', {
            templateUrl: 'partial/index.html',
            controller: 'IndexCtrl'
        }).when('/auth/login', {
            templateUrl: 'partial/login.html',
            controller: 'AuthCtrl'
        }).when('/auth/register', {
            templateUrl: 'partial/register.html',
            controller: 'AuthCtrl'
        }).when('/:subject', {
            templateUrl: 'partial/subject.html',
            controller: 'SubCtrl'
        }).when('/:subject/:course', {
            templateUrl: 'partial/course.html',
            controller: 'CourseCtrl'
        }).when('/:subject/:course/:class', {
            templateUrl: 'partial/class.html',
            controller: 'ClassCtrl'
        });
    }
]);

uniApp.filter('niceSeconds', function () {
    return function (seconds) {
        seconds = seconds || 0;
        n_hours = Math.floor(seconds / 3600);
        seconds %= 3600;
        n_minutes = Math.floor(seconds / 60);
        seconds %= 60;
        n_seconds = seconds;

        out = '';
        if (n_hours) out += hours   + ':';
        out += n_minutes + ':';
        out += (n_seconds < 10 ? '0' : '') + n_seconds;

        return out;
    };
});
