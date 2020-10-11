(function () {
    "use strict";

    angular.module('MenuApp')
        .controller('ItemsController', ItemsController);

    ItemsController.inject = ['data']
    function ItemsController(data) {
        let itemsCTRL = this;
        itemsCTRL.items = data.menu_items
        itemsCTRL.category = data.category

    }

})();
