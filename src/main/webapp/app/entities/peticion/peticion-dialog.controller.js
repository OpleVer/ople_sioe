(function() {
    'use strict';

    angular
        .module('opleSioeApp')
        .controller('PeticionDialogController', PeticionDialogController);

    PeticionDialogController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'DataUtils', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

    function PeticionDialogController ($timeout, $scope, $stateParams, $uibModalInstance, DataUtils, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
        var vm = this;

        vm.peticion = entity;
        vm.clear = clear;
        vm.datePickerOpenStatus = {};
        vm.openCalendar = openCalendar;
        vm.byteSize = DataUtils.byteSize;
        vm.openFile = DataUtils.openFile;
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

        function openCalendar (date) {
            vm.datePickerOpenStatus[date] = true;
        }
    }
})();
