(function () {
'use strict';

angular.module('Data')
.component('items', {
  templateUrl: 'src/menu/templates/menu-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
