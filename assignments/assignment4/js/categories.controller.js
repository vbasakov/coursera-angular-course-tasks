(function () {
    "use strict";

    angular.module('MenuApp')
        .controller('CategoriesController', CategoriesController);


    CategoriesController.$inject = ['MenuDataService'];

    function CategoriesController(MenuDataService) {
        var ctrl = this;
        ctrl.categories = []

        MenuDataService.getAllCategories().then(function (result) {
                ctrl.categories = result.data;
            }
        )
    }
})();
