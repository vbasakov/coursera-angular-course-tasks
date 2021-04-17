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
            .state('public.launchCheck', {
                url: '/',
                controller: 'LaunchCheckController',
                templateUrl: 'src/public/launch-check/launch-check.html'
            });

    }
})();

