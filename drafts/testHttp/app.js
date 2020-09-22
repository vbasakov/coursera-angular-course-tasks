(function () {
    'use strict';

    angular.module("angModule", [])
        .controller("tableController", tableController())
        .constant("jsonApiPath","http://127.0.0.1:8080/json");

    function tableController() {
        return function ($scope) {
            var ctrl = this;

            ctrl.list = [{
                "operDate": "20.06.2020 23:24:21",
                "sum": 1180.0,
                "description": "Delivery Club"
            }, {"operDate": "25.06.2020 23:09:09", "sum": 99.0, "description": "Kega"}];

            $scope.nameClick = function (item) {
                item.exposed = !item.exposed;
            }
        };
    }

})();