(function () {
"use strict";

angular.module('public') 
.component('menuCategory', {
    templateUrl: 'src/public/menu-categories/menu-categories.html',
    bindings: {
        category: '<' 
    }
});



})();