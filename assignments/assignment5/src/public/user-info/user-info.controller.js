(function () {
    "use strict";

    angular.module('public')
        .controller('UserInfoController', UserInfoController);


    UserInfoController.$inject = ['user']

    function UserInfoController(user) {
        var userCtrl = this;
        userCtrl.user = user
        console.log(user)
    }

})();
