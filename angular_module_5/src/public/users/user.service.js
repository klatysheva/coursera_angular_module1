(function () {
    'use strict';

    angular.module('public')
        .service('UserService', UserService);

    UserService.$inject = [];

    function UserService() {
        let service = this;

        service.userSaved = false;

        service.user =
            {
                firstname: "",
                lastname: "",
                email: "",
                phoneNumber: "",
                favoriteDish: ""
            };

        service.saveUserInfo = function (user) {
            service.user.firstname = user.firstname;
            service.user.lastname = user.lastname;
            service.user.email = user.email;
            service.user.phoneNumber = user.phoneNumber;
            service.user.favoriteDish = user.favoriteDish;
            console.log(user.firstname + " " + user.lastname + " saved!");
            service.userSaved = true;
        }

        service.getUserInfo = function () {
            return service.user;
        };
    }

})();
