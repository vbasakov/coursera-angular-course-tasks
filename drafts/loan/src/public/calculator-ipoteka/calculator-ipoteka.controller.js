(function () {
    'use strict';
    angular.module('public')
        .controller('CalculatorIpotekaController', CalculatorIpotekaController);
    CalculatorIpotekaController.$inject = ['$scope', '$cookies'];

    function CalculatorIpotekaController($scope, $cookies) {
        var ipoCtrl = this;
        ipoCtrl.form = {
            sum: 2_500_000,
            initial: 0,
            years: 15,
            rate: 16.5,

        };

        // Retrieving a cookie
        var favoriteCookie = $cookies.get('myFavorite');
        console.log('fc: ' + favoriteCookie)
        // Setting a cookie
        $cookies.put('myFavorite', 'oatmeal');


        function getRecords(years, sum, rate, startMonth, startYear) {
            function round(x) {
                return Math.round(x * 100) / 100
            }

            let months = new Map([
                [1, 'Январь'],
                [2, 'Февраль'],
                [3, 'Март'],
                [4, 'Апрель'],
                [5, 'Май'],
                [6, 'Июнь'],
                [7, 'Июль'],
                [8, 'Август'],
                [9, 'Сентябрь'],
                [10, 'Октябрь'],
                [11, 'Ноябрь'],
                [12, 'Декабрь'],
            ]);

            function getDate(month, year) {
                month += 1
                if (month > 12) {
                    month = 1;
                    year += 1;
                }
                return {
                    month: month,
                    year: year,
                    date: months.get(month) + ', ' + year
                }

            }

            let result = []
            let month = startMonth
            let year = startYear
            let date = months.get(month) + ', ' + year

            let periodsNumber = years * 12;
            let monthlyRate = rate / 100 / 12;
            let annuityPayment = (sum * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -periodsNumber));
            annuityPayment = round(annuityPayment)
            for (let i = 1; i <= periodsNumber; i++) {
                let monthlyPercentsAmount = round(sum * monthlyRate);
                let mainDebt = round(annuityPayment - monthlyPercentsAmount);

                let record = {
                    num: i,
                    date: date,
                    sum: annuityPayment,
                    main: mainDebt,
                    procents: monthlyPercentsAmount,
                    rest: round(sum - mainDebt)
                }

                if (record.rest > -10) {
                    result.push(record)
                    // subscribers.forEach(it -> it.onNext(report));
                    sum -= mainDebt;
                } else {
                    break;
                }



                let withDosroch = true
                if (withDosroch) {

                    let important = 50000;
                    let dos = {
                        num: i,
                        date: date,
                        sum: important,
                        main: important,
                        procents: 0,
                        rest: round(sum - important)
                    }

                    if (dos.rest > -10) {
                        result.push(dos)
                        // subscribers.forEach(it -> it.onNext(report));
                        sum -= important;
                    } else {
                        break;
                    }

                }


                let newDate = getDate(month, year);
                date = newDate.date
                month = newDate.month
                year = newDate.year
            }


            return result
        }

        ipoCtrl.loanRecords = getRecords(ipoCtrl.form.years, ipoCtrl.form.sum, ipoCtrl.form.rate, 4, 2021)

    }
})();