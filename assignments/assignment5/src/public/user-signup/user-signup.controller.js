(function () {
    "use strict";

    angular.module('public')
        .controller('SignUpController', SignUpController);


    function SignUpController() {
        var signupCtrl = this;

        signupCtrl.submit = function (regForm) {
            console.log(signupCtrl.user)
            console.log(regForm)
            regForm.favorite.$error.nonExist = true
            signupCtrl.completed = true;
        };
    }

})();
