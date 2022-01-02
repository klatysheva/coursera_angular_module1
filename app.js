(function () {
    'use strict';
    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.food = "";
        $scope.foodCount = "0";
        $scope.msg = "";

        $scope.checkIfTooMuch = function () {
            $scope.foodCount = $scope.countFood();
            if ($scope.food == "") {
                $scope.msg = "Please enter data first"
            }
            else {if ($scope.foodCount  > 3) {
                $scope.msg = "Too much!"
            }
            else {
                $scope.msg = "Enjoy!"
            }}
        };

        $scope.countFood = function () {
            const foodArr = $scope.food.split(',');
            return foodArr.length;
        }


        //
        // $scope.feedYaakov = function () {
        //     $scope.stateOfBeing = "fed";
        // };
    }
})();