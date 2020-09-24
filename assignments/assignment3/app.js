(function () {
    'use strict'

    angular.module('Assignment3', [])
        .constant("endpoint", "https://davids-restaurant.herokuapp.com/menu_items.json")
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService);


    NarrowItDownController.$inject = ["MenuSearchService"];
    function NarrowItDownController(MenuSearchService) {
         var ctrl = this;

         var promise = MenuSearchService.getRecords();
         promise.then(function (response) {
             ctrl.list = response.data;
        })

    }


    //кешировать?
    MenuSearchService.$inject = ["$http", "endpoint"]
    function MenuSearchService($http, endpoint) {
        var service = this;

        service.getRecords = function () {
            console.log("getRecords ...");
            var response = $http({
                method: "GET",
                url: (endpoint)
            });
            return response;
        };
    }
}())

