angular.module('myAppDteHistory', [])
    .controller('DteHistoryController', ['$scope', function ($scope) {

        $scope.documentosVisibility = true; // Mostrar vista Documentos por defecto
        $scope.emisorVisibility = false; // Ocultar vista Emisor por defecto
        $scope.receptorVisibility = false; // Ocultar vista Receptor por defecto

        $scope.showDocumentos = function () {
            $scope.documentosVisibility = true;
            $scope.emisorVisibility = false;
            $scope.receptorVisibility = false;

        };

        $scope.showEmisor = function () {
            $scope.documentosVisibility = false;
            $scope.emisorVisibility = true;
            $scope.receptorVisibility = false;
            console.log("Emisor");
        };

        $scope.showReceptor = function () {
            $scope.documentosVisibility = false;
            $scope.emisorVisibility = false;
            $scope.receptorVisibility = true;
            console.log("Receptor");
        }      
    }]);