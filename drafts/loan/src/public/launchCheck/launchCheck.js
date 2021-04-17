(function () {
    'use strict';
    angular.module("LaunchCheck", [])
        .controller("LaunchCheckController", LaunchCheckController);
    LaunchCheckController.$inject = ['$scope'];
    function LaunchCheckController($scope) {
        $scope.menu = ""
        $scope.greeting = "controller is available from inner folder"

        function getMessage() {
            if ($scope.menu === "")
                return "Please enter data first"
            let list = $scope.menu.split(',')
            return list.length <= 3 ? "Enjoy!" : "Too much!"
        }

        $scope.showMessage = function () {
            $scope.message = getMessage();
        }
    }
})();