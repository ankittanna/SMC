'use strict';

/**
 * @ngdoc function
 * @name smcApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the smcApp
 */
angular.module('smcApp')
  .controller('IndexCtrl', function () {
    this.activeTab = 'homeTab';
    
    this.switchTab = function(tabName){
        this.activeTab = tabName + 'Tab';
    };
    
  });
