'use strict';

/**
 * @ngdoc overview
 * @name smcApp
 * @description
 * # smcApp
 *
 * Main module of the application.
 */
angular
  .module('smcApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/gallery', {
        templateUrl: 'views/gallery.html',
        controller: 'GalleryCtrl',
        controllerAs: 'gallery'
      })
    .when('/products', {
        templateUrl: 'views/products.html',
        controller: 'ProductsCtrl',
        controllerAs: 'products'
      })
    .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
