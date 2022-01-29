(function () {
    "use strict";

    angular.module('public')
        .controller('UserInfoController', UserInfoController);

    UserInfoController.$inject = ['UserService'];
    function UserInfoController(UserService) {
        var $ctrl = this;
        $ctrl.user =   UserService.getUserInfo();
        $ctrl.userSaved = UserService.userSaved;
    }

})();
