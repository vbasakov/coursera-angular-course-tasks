(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['MenuService']

    function SignUpController(MenuService) {
        var signupCtrl = this;

        signupCtrl.submit = function (regForm) {
            console.log(signupCtrl.user)
            console.log(regForm)

            MenuService.getMenuItem(signupCtrl.user.favorite)
                .then(function (item) {
                    signupCtrl.favorite = item.name;
                }).catch(function (error) {
                console.log("Something wrong...");
                console.log(error);
                regForm.favorite.$error.nonExist = true
            });
            signupCtrl.completed = true;
        };
    }

})();
