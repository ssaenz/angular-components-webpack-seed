(function () {
  'use strict';

  var angular = require('angular');

  angular.module('HelloApp')
        .component('componentone', require('./componentone.component'));
})();
