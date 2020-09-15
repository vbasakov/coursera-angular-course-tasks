(function () {
    'use strict';

    angular.module("angModule", [])
        .controller("someController1", function ($scope) {
            $scope.name = "Initial string"
            $scope.total = calc(name);
            $scope.showResult = function () {
                $scope.total = calc($scope.name);
            }
        });

    function calc(name) {
        var total = 0;
        for (var i = 0; i < name.length; i++) {
            total += name.charCodeAt(i);
        }
        return total;
    }
})();