(function(){
    'use strict';

    angular
        .module('directiveApp')
        .controller('controller2Ctrl', controller2Ctrl)

    /** @ngInject */
    function controller2Ctrl($scope){
        $scope.mensaje = "Hola pantalla2";
    }

}());