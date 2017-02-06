'use strict';

/**
 * @ngdoc overview
 * @name bookmarksApp
 * @description
 * # bookmarksApp
 *
 * Main module of the application.
 */
angular
  .module('bookmarksApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/1', {
        templateUrl: 'views/1.html',
        controller: '1Ctrl',
        controllerAs: '1ctrl'
      })
      .when('/2', {
        templateUrl: 'views/2.html',
        controller: '2Ctrl',
        controllerAs: '2ctrl'
      })
      .when('/3', {
        templateUrl: 'views/3.html',
        controller: '3Ctrl',
        controllerAs: '3ctrl'
      })
      .when('/4', {
        templateUrl: 'views/4.html',
        controller: '4Ctrl',
        controllerAs: '4ctrl'
      })
      .when('/5', {
        templateUrl: 'views/angular.html',
        controller: '5Ctrl',
        controllerAs: '5ctrl'
      })
      .when('/6', {
        templateUrl: 'views/angular2.html',
        controller: '6Ctrl',
        controllerAs: '6ctrl'
      })
      .when('/7', {
        templateUrl: 'views/react.html',
        controller: '7Ctrl',
        controllerAs: '7ctrl'
      })
      .when('/8', {
        templateUrl: 'views/ember.html',
        controller: '8Ctrl',
        controllerAs: '8ctrl'
      })
      .when('/9', {
        templateUrl: 'views/backbone.html',
        controller: '9Ctrl',
        controllerAs: '9ctrl'
      })
      .when('/10', {
        templateUrl: 'views/frameworks.html',
        controller: '10Ctrl',
        controllerAs: '10ctrl'
      })
      .when('/11', {
        templateUrl: 'views/libraries.html',
        controller: '11Ctrl',
        controllerAs: '11ctrl'
      })
      .when('/12', {
        templateUrl: 'views/node.html',
        controller: '12Ctrl',
        controllerAs: '12ctrl'
      })
      .when('/13', {
        templateUrl: 'views/tools.html',
        controller: '13Ctrl',
        controllerAs: '13ctrl'
      })
      .when('/14', {
        templateUrl: 'views/design.html',
        controller: '14Ctrl',
        controllerAs: '14ctrl'
      })
      .when('/15', {
        templateUrl: 'views/work.html',
        controller: '15Ctrl',
        controllerAs: '15ctrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
