(function() {
    'use strict';

    angular
        .module('opleSioeApp')
        .controller('PeticionDetailController', PeticionDetailController);

<<<<<<< HEAD
    PeticionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

    function PeticionDetailController($scope, $rootScope, $stateParams, previousState, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
=======
    PeticionDetailController.$inject = ['$scope', '$rootScope', '$stateParams', 'previousState', 'DataUtils', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

    function PeticionDetailController($scope, $rootScope, $stateParams, previousState, DataUtils, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
>>>>>>> ople_sioe/master
        var vm = this;

        vm.peticion = entity;
        vm.previousState = previousState.name;
<<<<<<< HEAD
=======
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
>>>>>>> ople_sioe/master

        var unsubscribe = $rootScope.$on('opleSioeApp:peticionUpdate', function(event, result) {
            vm.peticion = result;
        });
        $scope.$on('$destroy', unsubscribe);
    }
})();
