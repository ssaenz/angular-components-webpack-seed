(function () {
  'use strict';

  HelloController.$inject = ['$rootScope'];

  function HelloController ($rootScope) {

    $rootScope.globalVariable = 0;

    $rootScope.increaseGlobal = function () {
      $rootScope.globalVariable ++;
      console.log("Hello controller: " + $rootScope.globalVariable);
    }
  }

  module.exports = HelloController;

})();
