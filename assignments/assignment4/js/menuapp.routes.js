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
                        return MenuDataService.getAllCategories()
                            .then(function (response) {
                                return response.data;
                            });
                    }]
                }
            })
            .state('items', {
                url: '/items/{categorySN}',
                templateUrl: 'templates/items.template.html',
                controller: 'ItemsController as itemsCTRL',
                resolve: {
                    data: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.categorySN)
                                .then(function (response) {
                                    return response.data;
                                });
                        }]
                }
            })
        ;

    }


})()
