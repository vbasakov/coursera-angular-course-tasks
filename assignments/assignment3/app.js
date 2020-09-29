(function () {
    'use strict'

    angular.module('Assignment3', [])
        .constant("endpoint", "https://davids-restaurant.herokuapp.com/menu_items.json")
        .controller("NarrowItDownController", NarrowItDownController)
        .service("MenuSearchService", MenuSearchService)
        .component('foundItems', {
            templateUrl: 'foundItems.html',
            controller: FoundListComponentController,
            bindings: {
                foundItems: '<',
                onRemove: '&'
            }
        });

    function FoundListComponentController() {
        let $ctrl = this;

        $ctrl.remove = function (myIndex) {
            $ctrl.onRemove({index: myIndex});
        };
    }


    NarrowItDownController.$inject = ["MenuSearchService"];

    function NarrowItDownController(MenuSearchService) {
        let ctrl = this;
        ctrl.searchText = "";
        ctrl.searchClicked = false;
        ctrl.found = [];

        function filter(list, searchText) {
            let found = [];
            list.forEach(item => {
                if (item.description.includes(searchText)) {
                    found.push(item);
                }
            });
            return found;
        }

        ctrl.search = function () {
            if (ctrl.searchText.length === 0) {
                ctrl.searchClicked = true;
                return;
            }
            let promise = MenuSearchService.getRecords();
            promise.then(function (response) {
                ctrl.searchClicked = true;
                let list = response.data.menu_items;
                ctrl.found = filter(list, ctrl.searchText);
            })
        };

        ctrl.onKeydown = function (event) {
            if (event.key === "Enter") {
                ctrl.search();
            }
        }

        ctrl.removeFromFound = function (index) {
            ctrl.found.splice(index, 1);
        };

    }


    //кешировать?
    MenuSearchService.$inject = ["$http", "endpoint"]

    function MenuSearchService($http, endpoint) {
        let service = this;

        service.getRecords = function () {
            console.log("getRecords ...");
            let response = $http({
                method: "GET",
                url: (endpoint)
            });
            return response;
        };
    }
}())

