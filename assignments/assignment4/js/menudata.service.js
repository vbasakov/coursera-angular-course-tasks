(function () {
    "use strict";

    angular.module('data')
        .constant('categoryEndpoint', 'https://davids-restaurant.herokuapp.com/categories.json')
        .constant('itemEndpoint', 'https://davids-restaurant.herokuapp.com/menu_items.json?category=')
        .service('MenuDataService ', MenuDataService );


    MenuDataService.$inject = ['categoryEndpoint','itemEndpoint'];
    function MenuDataService (categoryEndpoint, itemEndpoint) {
        var service = this;



    }


})();
