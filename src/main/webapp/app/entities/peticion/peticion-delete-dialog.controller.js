/*(function() {
    'use strict';

    angular
        .module('opleSioeApp')
        .controller('PeticionDeleteController',PeticionDeleteController);

    PeticionDeleteController.$inject = ['$uibModalInstance', 'entity', 'Peticion'];

    function PeticionDeleteController($uibModalInstance, entity, Peticion) {
        var vm = this;

        vm.peticion = entity;
        vm.clear = clear;
        vm.confirmDelete = confirmDelete;

        function clear () {
            $uibModalInstance.dismiss('cancel');
        }

        function confirmDelete (id) {
            Peticion.delete({id: id},
                function () {
                    $uibModalInstance.close(true);
                });
        }
    }
})();
 */

 (function() {
     'use strict';

     angular
         .module('opleSioeApp')
         .controller('PeticionDeleteController', PeticionDeleteController);

     PeticionDeleteController.$inject = ['$timeout', '$scope', '$stateParams', '$uibModalInstance', 'entity', 'Peticion', 'Usuario', 'Peticionario', 'Anexo', 'Prevencion', 'Evaluacion'];

     function PeticionDeleteController ($timeout, $scope, $stateParams, $uibModalInstance, entity, Peticion, Usuario, Peticionario, Anexo, Prevencion, Evaluacion) {
         var vm = this;

         vm.peticion = entity;
         vm.clear = clear;
         vm.datePickerOpenStatus = {};
         vm.openCalendar = openCalendar;
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

         function openCalendar (date) {
             vm.datePickerOpenStatus[date] = true;
         }
     }
 })();
