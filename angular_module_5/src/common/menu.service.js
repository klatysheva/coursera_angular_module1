(function () {
  "use strict";

  angular.module('common')
      .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath'];

  function MenuService($http, ApiPath) {
    let service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.getDish = function (shortName) {
      return $http.get(ApiPath + "/menu_items/" + shortName + ".json");
    }

    service.getMenuItems = function (category) {
      let config = {};
      if (category) {
        config.params = {'category': category};
      }
      return $http.get(ApiPath + '/menu_items.json', config).then(function (response) {
        return response.data;
      });
    };
  }
})();
