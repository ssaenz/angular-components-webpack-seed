(function() {

  angular.module('HelloApp', ['ui.bootstrap'])
        //Optional configuration
        .config(function($httpProvider) {
          //Enable cross domain calls
          $httpProvider.defaults.useXDomain = true;
        });

  require('./controllers');
  require('./components');

})();
