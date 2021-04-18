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


        ipoCtrl.loanRecords = [{
            num: 1,
            date: 'Апрель, 2021',
            sum: 37592.72,
            main: 3217.72,
            procents: 34375.00,
            rest: 2496782.28
        }, {
            num: 2,
            date: 'Май, 2021',
            sum: 39000,
            main: 3333,
            procents: 34375.77,
            rest: 100500
        }]

    }
})();