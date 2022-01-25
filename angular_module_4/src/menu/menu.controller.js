(function () {
  'use strict';

  angular.module('Data')
      .controller('MenuController', MenuController);

  MenuController.$inject = ['items', '$stateParams'];

  function MenuController(items, $stateParams) {
    let menu = this;
    menu.items = items;
    menu.category = $stateParams.category;
  }

})();
