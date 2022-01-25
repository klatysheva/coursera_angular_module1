(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // home page
  .state('home', {
    url: '/',
    templateUrl: 'src/menu/templates/home.template.html'
  })

  // menu page
  .state('menu', {
    url: '/menu',
    templateUrl: 'src/menu/templates/menu.template.html',
    controller: 'MenuController as menu',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        let items = MenuDataService.getItems();
        return items;
      }]
    }
  })

  // categories page
  .state('categories', {
    url: '/categories',
    templateUrl: 'src/menu/templates/categories.template.html',
    controller: 'CategoriesController as categories',
    resolve: {
       items: ['MenuDataService', function (MenuDataService) {
         let items = MenuDataService.getAllCategories();
         return items;
       }]
     }
  })

  // items for specified category page
  .state('categoryitems', {
    url: '/menu_items.json?category={short_name}',
    templateUrl: 'src/menu/templates/category-items.template.html',
    controller: 'MenuController as menu',
    resolve: {
       items: ['$stateParams', 'MenuDataService', function ($stateParams, MenuDataService) {
         let items = MenuDataService.getItemsForCategory($stateParams.category);
         return items;
       }]
     }
  });
}

})();
