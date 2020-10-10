(function () {
    "use strict";

    angular.module('data')
        .constant('categoryEndpoint', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('itemEndpoint', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
        .service('MenuDataService', MenuDataService);


    MenuDataService.$inject = ['$http', 'categoryEndpoint', 'itemEndpoint'];

    function MenuDataService($http, categoryEndpoint, itemEndpoint) {
        var service = this;
        service.getAllCategories = function () {
            return $http({
                method: "GET",
                url: (categoryEndpoint)
            });
        };
        service.getItemsForCategory = function (categoryShortName) {
            return $http({
                method: "GET",
                url: (itemEndpoint + categoryShortName)
            });
        }


    }


})();
