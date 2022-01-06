(function () {
  'use strict';

  angular.module('ShoppingList', [])
      .controller('ToBuyController', ToBuyController)
      .controller('AlreadyBoughtController', AlreadyBoughtController)
      .service('ShoppingListCheckOffService', ShoppingListCheckOffService);


  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;

    toBuyList.isEmpty = false;
    toBuyList.items = ShoppingListCheckOffService.getItemsToBuy();

    toBuyList.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
      toBuyList.isEmpty = ShoppingListCheckOffService.getIsNothingToBuy();
      console.log(toBuyList.isEmpty);
      // if (ShoppingListCheckOffService.getItemsToBuy().length === 0 ) {
      //   toBuyList.isEmpty = true;
      // }
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var alreadyBoughtList = this;

    alreadyBoughtList.isNotEmpty = false;
    alreadyBoughtList.items = ShoppingListCheckOffService.getBoughtItems();

  }

  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      {
        name: "Milk",
        quantity: "2"
      },
      {
        name: "Donut",
        quantity: "200"
      },
      {
        name: "Cookie",
        quantity: "300"
      },
      {
        name: "Chocolate",
        quantity: "5"
      },
      {
        name: "Cola",
        quantity: "5"
      }
    ];

    var boughtItems = [];

    var isNothingToBuy = false;
    var isSomethingBought = false;

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getIsNothingToBuy = function () {
      return isNothingToBuy;
    };

    service.getIsSomethingBought = function () {
      return isSomethingBought;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

    service.buyItem = function (itemIndex) {
      var item = {
        name: itemsToBuy[itemIndex].name,
        quantity: itemsToBuy[itemIndex].quantity,
      };
      itemsToBuy.splice(itemIndex, 1);
      boughtItems.push(item);
      if (itemsToBuy.length === 0) {
        isNothingToBuy = true;
      }
      if (boughtItems.length !== 0) {
        isSomethingBought = true;
      }
    };
  }

})();