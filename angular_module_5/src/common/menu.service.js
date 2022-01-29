(function () {
  "use strict";

  angular.module('common')
      .service('MenuService', MenuService);

  MenuService.$inject = ['$http', 'ApiPath', '$q', '$timeout'];

  function MenuService($http, ApiPath, $q, $timeout) {
    let service = this;

    service.getCategories = function () {
      return $http.get(ApiPath + '/categories.json').then(function (response) {
        return response.data;
      });
    };

    service.checkIfDishExist = function (shortName) {
      console.log('checkIfDishExist');

      let result = {
        isExist: false
      }

      return $http.get(ApiPath + "/menu_items/" + shortName + ".json").then(function () {
        result.isExist = true;
        return result;
      })
          .catch(function (error) {
            console.log(error);
            return result;
          });

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
