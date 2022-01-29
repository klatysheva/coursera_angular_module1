(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$q', '$timeout', 'UserService', 'MenuService'];

    function SignUpController($q, $timeout, UserService, MenuService) {
        let $ctrl = this;
        $ctrl.showErrorMessage = false;
        $ctrl.showInfoMsg = false;
        $ctrl.infoSaved = false;
        $ctrl.savedMessage = "Your information has been saved";
        $ctrl.waitMessage = "Please wait...";
        $ctrl.infoMessage = $ctrl.waitMessage;

        $ctrl.user =
            {
                firstname: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                favoriteDish: ""
            };

        $ctrl.submit = function () {

            $ctrl.showErrorMessage = false;
            $ctrl.checkDish($ctrl.user.favoriteDish);

            $timeout(function () {
                $ctrl.showInfoMsg = true;
                if (!$ctrl.showErrorMessage) {
                    UserService.saveUserInfo($ctrl.user);
                    $ctrl.infoMessage = $ctrl.savedMessage;
                    $ctrl.infoSaved = true;
                    $ctrl.completed = true;
                }
            }, 4000);
        };

        $ctrl.checkDish = function (short_name) {
            $ctrl.showInfoMsg = true;
            MenuService.checkIfDishExist(short_name).then(function (response) {
                $ctrl.showErrorMessage = !response.isExist;
                if ($ctrl.showErrorMessage === true) {
                    $ctrl.showInfoMsg = false;
                }
            });
        }
    }
})();
