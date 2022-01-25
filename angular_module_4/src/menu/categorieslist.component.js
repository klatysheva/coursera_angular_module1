(function () {
'use strict';

angular.module('Data')
.component('categoriesList', {
  templateUrl: 'src/menu/templates/categories-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
