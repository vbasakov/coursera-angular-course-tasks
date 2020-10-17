(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService', 'UserService']

    function SignUpController(MenuService, UserService) {
        var signupCtrl = this;

        signupCtrl.submit = function (regForm) {
            console.log(signupCtrl.user)
            console.log(regForm)

            MenuService.getMenuItem(signupCtrl.user.favoriteShortName)
                .then(function (item) {
                    signupCtrl.favoriteName = item.name;
                    signupCtrl.user.favorite = item
                    UserService.setUser(signupCtrl.user)
                }).catch(function (error) {
                console.log("Something wrong...");
                console.log(error);
                regForm.favorite.$error.nonExist = true
                UserService.setUser(signupCtrl.user)
            });
            signupCtrl.completed = true;
        };
    }

})();
