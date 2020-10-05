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
            MenuSearchService.getMatchedMenuItems(ctrl.searchText).then(function (found) {
                ctrl.found = found;
                ctrl.searchClicked = true;
            });
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


    MenuSearchService.$inject = ["$http", "endpoint"]
    function MenuSearchService($http, endpoint) {
        let service = this;

        //Запрос кешируется браузером, поэтому собственное кеширование можно отложить
        service.getRecords = function () {
            console.log("getRecords ...");
            return $http({
                method: "GET",
                url: (endpoint)
            });
        };

        service.getMatchedMenuItems = function (searchTerm) {
            console.log('getMatchedMenuItems')
            return service.getRecords().then(function (response) {
                // process result and only keep items that match
                let result = response.data.menu_items;
                let foundItems = []
                result.forEach(item => {
                    if (item.description.includes(searchTerm)) {
                        foundItems.push(item);
                    }
                });
                // return processed items
                return foundItems;
            });
        }
    }
}())

