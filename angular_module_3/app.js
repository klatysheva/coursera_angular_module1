(function () {
  'use strict';

  angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com")
      .directive('foundItems', FoundItems);

  function FoundItems() {
    let ddo = {
      templateUrl: 'foundItems.html'
    };
    return ddo;
  }

  NarrowItDownController.$inject = ['MenuSearchService'];

  function NarrowItDownController(MenuSearchService) {
    let narrowCtrl = this;
    narrowCtrl.searchedTerm = "";
    narrowCtrl.items = [];

    narrowCtrl.getMatchedMenuItems = function () {

      let promise = MenuSearchService.getMatchedMenuItems(narrowCtrl.searchedTerm);

      promise.then(function () {
        narrowCtrl.items = promise.$$state.value;
      })
          .catch(function () {
            console.log("Something went terribly wrong.");
          });
    }

    narrowCtrl.removeItem = function (itemIndex) {
      MenuSearchService.removeItem(itemIndex);
    };

  }

  MenuSearchService.$inject = ['$http', 'ApiBasePath'];

  function MenuSearchService($http, ApiBasePath) {
    let service = this;
    service.foundItems = [];

    service.getMatchedMenuItems = function (searchedTerm) {
      service.foundItems = [];
      if (searchedTerm === "") {

      }
      var promise = $http({
        method: "GET",
        url: (ApiBasePath + "/menu_items.json")
      }).then(function (result) {
        if (searchedTerm !== "") {
          let allItems = result.data.menu_items;
          for (let i = 0; i < allItems.length; i++) {
            if (allItems[i].description.toLowerCase().indexOf(searchedTerm) !== -1) {
              service.foundItems.push(allItems[i]);
            }
          }
        }
        return service.foundItems;
      });
      return promise;
    };

    service.removeItem = function (itemIndex) {
      service.foundItems.splice(itemIndex, 1);
    };

  }

})();
