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