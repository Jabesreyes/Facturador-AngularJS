var app = angular.module('myApp', []);

app.controller('Login', function($scope, $window) {
    $scope.usuario = '';
    $scope.password = '';
    $scope.iniciarSesion = function() {
        // CODIGO PARA INICIAR SESION

        // Redirigir al usuario 
        $window.location.href = 'pages/opciones.html';
    };
});
