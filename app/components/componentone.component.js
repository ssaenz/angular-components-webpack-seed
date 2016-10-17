(function () {
  'use strict';

  ComponentOneController.$inject = ['$rootScope'];

  function ComponentOneController ($rootScope) {

    var ctrl = this;
    ctrl.localVariable = 0;

    ctrl.increaseGlobal = function () {
      $rootScope.globalVariable ++;
    }

    ctrl.increaseLocal = function () {
      ctrl.localVariable ++;
    }
  }

  var ComponentOne = {
      template: require("raw!./templates/componentone.html"),
      controller: ComponentOneController
  }

  module.exports = ComponentOne;

})();
