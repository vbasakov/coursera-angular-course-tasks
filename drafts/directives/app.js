(function () {
    'use strict';


    angular.module("angModule", [])
        .controller("TableController", TableController)
        .directive("dir1", myDirective);

    function myDirective() {
        var ddo = {
            templateUrl: 'dir1.html',
            scope: {
                prop1: '=',    // two-way binding        without {{ }}
                prop2: '@',    // as string binding     {{ }} can be, but unnessessary
                prop3: '<',    // one-way binding        without {{ }}
                innerMethod: '&outerMethod'
            }
        };
        return ddo;
    }


    function TableController() {
        var ctrl = this;

        ctrl.prop1 = "Property 1";
        ctrl.prop2 = "Property 2";
        ctrl.prop3 = "Property 3";
        ctrl.someMethod = function (str) {
            ctrl.prop4 = str;
        }
    }


})();
