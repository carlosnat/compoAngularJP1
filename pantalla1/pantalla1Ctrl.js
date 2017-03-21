(function(){
    'use strict';

    angular
        .module('directiveApp')
        .controller('controller1Ctrl', controller1Ctrl)

    /** @ngInject */
    function controller1Ctrl($scope){
        $scope.mensaje = "Hola pantalla1";
    }

}());