(function () {
  'use strict';

  var angular = require('angular');

  angular.module('HelloApp')
    .controller('HelloController', require('./HelloController.controller'))
    .controller('ByeController', require('./ByeController.controller'));

})();
