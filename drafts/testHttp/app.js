(function () {
    'use strict';

    angular.module("angModule", [])
        .controller("TableController", TableController)
        .service("RecordsService", RecordsService)
        .constant("jsonApiPath", "http://127.0.0.1:8080/json");

    TableController.$inject = ['RecordsService']

    function TableController(RecordsService) {
        var ctrl = this;

        var promise = RecordsService.getRecords();
        promise.then(function (response) {
            ctrl.list = response.data;
        }).catch(function (error) {
            console.log("Something wrong...");
            console.log(error);
        });

        // ctrl.list = [{
        //     "operDate": "20.06.2020 23:24:21",
        //     "sum": 1180.0,
        //     "description": "Delivery Club"
        // }, {"operDate": "25.06.2020 23:09:09", "sum": 99.0, "description": "Kega"}];

        ctrl.nameClick = function (item) {
            item.exposed = !item.exposed;
        }

    }

    RecordsService.$inject = ['$http', 'jsonApiPath'];

    function RecordsService($http, jsonApiPath) {
        var service = this;

        service.getRecords = function () {
            console.log("getRecords ...");
            console.log(jsonApiPath + "/");
            var response = $http({
                method: "GET",
                url: (jsonApiPath + "/")
            });
            return response;
        };
    }

})();