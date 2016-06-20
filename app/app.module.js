(function() {
  'use strict';

  angular.module('mutantApp', [
    //Angular modules
    'ui.router',
    //Third-party modules
    'firebase',

    //Custon modules
    'mutantApp.home',
    'mutantApp.mutantList',
  ]);
})();
