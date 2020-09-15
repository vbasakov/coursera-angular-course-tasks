(function () {
    'use strict';


    angular.module("angModule", [])
        .controller("someController1", function ($scope) {
            $scope.name = "Initial string"
            $scope.total = calc(name);
            $scope.showResult = function () {
                $scope.total = calc($scope.name);
            }
        })
        .controller("tableController", function ($scope) {
            $scope.test = 123;
            $scope.data = [
                {name: 'name1', value: 123},
                {name: 'name2', value: 444},
                {
                    name: 'big', value: 444, children: [
                        {name: 'child1', value: 666},
                        {name: 'child2', value: 777}]
                }

            ]
        });

    function calc(name) {
        var total = 0;
        for (var i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        return total;
    }
})();