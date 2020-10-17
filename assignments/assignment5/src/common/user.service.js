(function () {
    "use strict";

    angular.module('common')
        .service('UserService', UserService);

    function UserService() {
        var service = this;

        service.user = undefined

        // service.user = {
        //     firstname: "First",
        //     lastname: "Last",
        //     email: "sdfg@sdf",
        //     phone: "234-234-3455",
        //     favorite: {
        //         "id": 31,
        //         "short_name": "SP4",
        //         "name": "Orange Chicken and Beef Combo",
        //         "description": "white meat chicken and beef, breaded and deep-fried with special house sauce; served with lo mein and vegetables",
        //         "price_small": null,
        //         "price_large": 19.95,
        //         "small_portion_name": null,
        //         "large_portion_name": null,
        //         "created_at": "2020-10-14T19:38:51.868Z",
        //         "updated_at": "2020-10-14T19:38:51.868Z",
        //         "category_short_name": "SP",
        //         "image_present": true
        //     }
        // }

        service.setUser = function (user) {
            service.user = user
        }

        service.getUser = function () {
            return service.user;
        };
    }
})();
