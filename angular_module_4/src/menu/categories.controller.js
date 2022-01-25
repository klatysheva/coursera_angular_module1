(function () {
  'use strict';

  angular.module('Data')
      .controller('CategoriesController', CategoriesController);

  CategoriesController.$inject = ['items'];

  function CategoriesController(items) {
    let categories = this;
    categories.items = items;
  }

})();


