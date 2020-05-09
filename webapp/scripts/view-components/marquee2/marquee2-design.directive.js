(function () {
    'use strict';
    angular.module('com.vyom.vyomlib.view-components.marquee2')
    	.directive('comVyomVyomlibMarquee2Design', function () {

        return {
            restrict: 'E',
            templateUrl: 'scripts/view-components/marquee2/com-vyom-vyomlib-marquee2-design.directive.html',

            scope: {
                rxConfiguration: '='
            }
        };
    });
})();