(function() {
    'use strict';

    angular
        .module('opleSioeApp')
        .controller('PeticionDialogController', PeticionDialogController);

<<<<<<< HEAD
    PeticionDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

    function PeticionDialogController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
=======
    PeticionDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

    function PeticionDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
>>>>>>> ople_sioe/master
        var vm = this;

        vm.peticion = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
<<<<<<< HEAD
=======
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
>>>>>>> ople_sioe/master
        vm.save = save;
        vm.usuarios = Usuario.query();
        vm.peticionarios = Peticionario.query();
        vm.anexos = Anexo.query();
        vm.prevencions = Prevencion.query();
        vm.evaluacions = Evaluacion.query();

        $timeout(function (){
            angular.element('.form-group:eq(1)>input').focus();
        });

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function save () {
            vm.isSaving = true;
            if (vm.peticion.id !== null) {
                Peticion.update(vm.peticion, onSaveSuccess, onSaveError);
            } else {
                Peticion.save(vm.peticion, onSaveSuccess, onSaveError);
            }
        }

        function onSaveSuccess (result) {
            $scope.$emit('opleSioeApp:peticionUpdate', result);
            $uibModalInstance.close(result);
            vm.isSaving = false;
        }

        function onSaveError () {
            vm.isSaving = false;
        }

        vm.datePickerOpenStatus.fecha = false;

<<<<<<< HEAD
=======
        vm.setOficio = function ($file, peticion) {
            if ($file) {
                DataUtils.toBase64($file, function(base64Data) {
                    $scope.$apply(function() {
                        peticion.oficio = base64Data;
                        peticion.oficioContentType = $file.type;
                    });
                });
            }
        };

>>>>>>> ople_sioe/master
        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
