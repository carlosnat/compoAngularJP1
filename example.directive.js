(function () {
    'use strict';

    angular
        .module ('directiveApp')
        .directive ('exampleDirective', exampleDirective);

    /** @ngInject */
    function exampleDirective() {

        return {
            templateUrl: 'example.directive.html'
        }
    }

} ());