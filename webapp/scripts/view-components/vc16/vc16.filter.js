(function () {
    'use strict';

    angular.module('com.vyom.vyomlib.view-components.vc16')
        .filter('comVyomVyomlibMyFilter', function () {
            return function (labelText) {
                return labelText;
            };
        });
})();