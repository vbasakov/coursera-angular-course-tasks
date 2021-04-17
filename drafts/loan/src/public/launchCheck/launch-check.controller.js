(function () {
    'use strict';
    angular.module("public")
        .controller("LaunchCheckController", LaunchCheckController);
    LaunchCheckController.$inject = ['$scope'];
    function LaunchCheckController($scope) {
        $scope.greeting = "controller is available from inner folder"
    }
})();