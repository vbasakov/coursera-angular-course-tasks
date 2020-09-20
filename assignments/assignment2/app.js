(function () {
    'use strict'

    angular.module('Assignment2', [])
        .controller("ToBuyListController", ToBuyListController)
        .controller("BoughtListController", BoughtListController)
        .service("ShoppingListService", ShoppingListService)


    ToBuyListController.$inject = ['ShoppingListService'];
    function ToBuyListController(ShoppingListService) {
        var toBuyCtrl = this;
        toBuyCtrl.list = ShoppingListService.getToBuy();
        toBuyCtrl.bought = function (index) {
            ShoppingListService.buyItem(index);
        };
    }

    BoughtListController.$inject = ['ShoppingListService']
    function BoughtListController(ShoppingListService) {
        var boughtCtrl = this;
        boughtCtrl.list = ShoppingListService.getBought();

    }

    function ShoppingListService() {
        let service = this;
        var toBuy = [
            {name: 'cookies', quantity: 10},
            {name: 'milk', quantity: 2},
            {name: 'bread', quantity: 1},
            {name: 'Fanta', quantity: 4},
            {name: 'coffee', quantity: 7},
        ];

        var bought = [];

        service.addItem = function (name, quantity) {
            toBuy.push({name: name, quantity: quantity});
        }

        service.buyItem = function (index) {
            var item = toBuy[index];
            toBuy.splice(index,1);
            bought.push(item);
        }

        service.getToBuy = function () {
            return toBuy;
        }

        service.getBought = function () {
            return bought
        }
    }
})();
