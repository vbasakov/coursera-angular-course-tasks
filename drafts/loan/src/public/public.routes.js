(function () {
    'use strict';

    angular.module('public')
        .config(routeConfig);

    /**
     * Configures the routes and views
     */
    routeConfig.$inject = ['$stateProvider'];

    function routeConfig($stateProvider) {
        // Routes
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: 'src/public/public.html'
            })
            .state('public.root', {
                url: '/',
                controller: 'CalculatorIpotekaController',
                templateUrl: '/src/public/calculator-ipoteka/calculator-ipoteka.html'
            })
            .state('public.calculator-ipoteka', {
                url: '/ipo-calc',
                controller: 'CalculatorIpotekaController',
                templateUrl: '/src/public/calculator-ipoteka/calculator-ipoteka.html'
            })
            .state('public.launch-check', {
                url: '/launch-check',
                controller: 'LaunchCheckController',
                templateUrl: 'src/public/launch-check/launch-check.html'
            });

    }
})();

