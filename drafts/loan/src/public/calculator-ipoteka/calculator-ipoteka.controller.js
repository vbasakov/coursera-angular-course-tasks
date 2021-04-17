(function () {
    'use strict';
    angular.module('public')
        .controller('CalculatorIpotekaController', CalculatorIpotekaController);
    CalculatorIpotekaController.$inject = ['$scope'];
    function CalculatorIpotekaController($scope) {
        var ipoCtrl = this;
        ipoCtrl.form = {
            sum: 2_500_000

        };

    }
})();