(function () {
  'use strict';

  angular.module('Data')
      .service('MenuDataService', MenuDataService)
      .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");

  MenuDataService.$inject = ['$http', 'ApiBasePath'];


  function MenuDataService($http, ApiBasePath) {
    let service = this;

    service.getItems = function () {
      var items = [];

      items = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        return result.data.menu_items;
      });

      return items;
    };

    service.getItemsForCategory = function (categoryShortName) {
      let items = [];

      items = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json"),
        params: {
          category: categoryShortName
        }
      }).then(function (result) {
        return result.data.menu_items;
      })

      return items;
    }

    service.getAllCategories = function () {
      var categories = [];

      categories = $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      }).then(function (result) {
        return result.data;
      });

      return categories;
    };
  }

})();
