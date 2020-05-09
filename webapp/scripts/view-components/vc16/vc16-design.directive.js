(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.vc16')
    	.directive('comVyomVyomlibVc16Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/vc16/com-vyom-vyomlib-vc16-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();