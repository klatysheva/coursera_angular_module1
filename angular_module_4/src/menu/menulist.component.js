(function () {
'use strict';

angular.module('Data')
.component('menuList', {
  templateUrl: 'src/menu/templates/menu-list.template.html',
  bindings: {
    items: '<'
  }
});

})();
