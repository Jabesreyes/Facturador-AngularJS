angular.module('myAppDte', [])
    .controller('DteController', ['$scope', function ($scope) {
        // Inicializamos los objetos emisorData | receptorData como objetos vacíos
        $scope.emisorData = {};
        $scope.receptorData = {};

        $scope.tipoDteVisibility = true; // Mostrar formulario Tipo DTE por defecto
        $scope.emisorVisibility = false; // Ocultar formulario Emisor por defecto
        $scope.receptorVisibility = false; // Ocultar formulario Receptor por defecto

        $scope.showTipoDte = function () {
            $scope.tipoDteVisibility = true;
            $scope.emisorVisibility = false;
            $scope.receptorVisibility = false;

        };

        $scope.showEmisor = function () {
            $scope.tipoDteVisibility = false;
            $scope.emisorVisibility = true;
            $scope.receptorVisibility = false;  
        };

        $scope.showReceptor = function () {
            $scope.tipoDteVisibility = false;
            $scope.emisorVisibility = false;
            $scope.receptorVisibility = true;
        }

        // Funcion para guardar el formulario Tipo DTE
        $scope.saveTipoDte = function () {
            
            $scope.showEmisor(); // Muestra el formulario Emisor
        };

        // Funcion para guardar el formulario Emisor
        $scope.saveEmisor = function () {
             if(!$scope.emisorData.nombre || !$scope.emisorData.actividad || !$scope.emisorData.departamento || !$scope.emisorData.telefono || !$scope.emisorData.complemento || !$scope.emisorData.nombreComercial || !$scope.emisorData.nrc || !$scope.emisorData.nit || !$scope.emisorData.municipio || !$scope.emisorData.correo){
                swal("Error", "Todos los campos son requeridos", "error");

             }else{
                 $scope.showReceptor(); // Muestra el formulario Receptor

             }
        };

        // Funcion para guardar el formulario Receptor
        $scope.saveReceptor = function () {
            if(!$scope.receptorData.nombre || !$scope.receptorData.nDocumento || !$scope.receptorData.departamento || !$scope.receptorData.telefono || !$scope.receptorData.correo || !$scope.receptorData.tipoDocumento || !$scope.receptorData.nrc || !$scope.receptorData.municipio || !$scope.receptorData.complemento || !$scope.receptorData.actividad){
                swal("Error", "Todos los campos son requeridos", "error");

             }else{
                swal("Guardado", "Datos guardados correctamente", "success");
             }
        };
    }]);