(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['$q', '$timeout', 'UserService', 'MenuService'];

    function SignUpController($q, $timeout, UserService, MenuService) {
        let $ctrl = this;
        $ctrl.showErrorMessage = false;
        $ctrl.showInfoMsg = false;

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
            $ctrl.showInfoMsg = false;

            MenuService.getDish($ctrl.user.favoriteDish).then(function() {
                UserService.saveUserInfo($ctrl.user);
                $ctrl.showInfoMsg = true;
            }, function(error) {
                console.log(error);
                $ctrl.showErrorMessage = true;
            });
        };
    }
})();
