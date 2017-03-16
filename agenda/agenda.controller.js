angular.module('app').controller('AgendaCtrl',function($scope,AgendaSrv){

    $scope.appuntamenti=AgendaSrv.getAppuntamenti();
    console.log($scope.appuntamenti);

    $scope.elimina=function(indice){
        AgendaSrv.deleteAppuntamento(indice);
    }
    
});