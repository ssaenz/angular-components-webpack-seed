(function () {
  'use strict';

  ByeController.$inject = ['$rootScope'];

  function ByeController ($rootScope) {

    $rootScope.globalVariable = 0;

    $rootScope.increaseGlobal = function () {
      $rootScope.globalVariable ++;
      console.log("bye controller: " + $rootScope.globalVariable);
    }
  }

  module.exports = ByeController;

})();
