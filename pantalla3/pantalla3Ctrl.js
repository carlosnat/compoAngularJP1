(function(){
    'use strict';

    angular
        .module('directiveApp')
        .controller('controller3Ctrl', controller3Ctrl)

    /** @ngInject */
    function controller3Ctrl($scope){
        $scope.mensaje = "Hola pantalla3";
    }

}());