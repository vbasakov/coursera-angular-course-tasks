(function () {
    'use strict';
    angular.module("LunchCheck", [])
        .controller("LunchCheckController", LunchCheckController);
    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.menu = ""

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