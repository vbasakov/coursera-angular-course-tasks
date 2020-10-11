(function () {
    'use strict'
    angular.module('MenuApp').config(RoutesConfig);


    RoutesConfig.inject = ['$stateProvider', '$urlRouterProvider']

    function RoutesConfig($stateProvider, $urlRouterProvider) {

        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider

            // Home page
            .state('home', {
                url: '/',
                templateUrl: 'templates/home.template.html'
            })

            // Categories page
            .state('categories', {
                url: '/categories',
                templateUrl: 'templates/categories.template.html',
                controller: 'CategoriesController as catCTRL',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

    }


})()
