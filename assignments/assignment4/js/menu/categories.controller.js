(function () {
    "use strict";

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController)
        .controller('LoggerController', LoggerController);

    CategoriesController.inject = ['categories']
    function CategoriesController(categories) {
        let catCTRL = this;
        catCTRL.categories = categories

    }


    LoggerController.$inject = ['$rootScope']
    function LoggerController($rootScope) {
        let logger = this;

        let cancellers = [];

        logger.$onInit = function () {
            console.info("on init logger")
            var cancel = $rootScope.$on('$stateChangeStart',
                function (event, toState, toParams, fromState, fromParams, options) {
                    console.log('$stateChangeStart')
                    console.log(event)
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeSuccess',
                function (event, toState, toParams, fromState, fromParams) {
                    console.log('Success  ....')
                    console.log(event)
                });
            cancellers.push(cancel);

            cancel = $rootScope.$on('$stateChangeError',
                function (event, toState, toParams, fromState, fromParams, error) {
                    console.log('$stateChangeError')
                    console.log(event)
                    console.log(toState)
                    console.log(toParams)
                    console.log(fromState)
                    console.log(fromParams)
                    console.log(error)
                });
        }

        logger.$onDestroy = function () {
            cancellers.forEach(function (item) {
                item();
            });
        };
    }


})();
