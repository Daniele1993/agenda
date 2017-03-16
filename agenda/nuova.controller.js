angular.module('app').controller('NuovoCtrl',function($scope,AgendaSrv,$state){

    $scope.crea=function(){
        console.log($scope.appuntamento);
        AgendaSrv.creaAppuntamento($scope.appuntamento);
         $state.go('/');
    }
    $scope.back=function(){
        $state.go('/');
    }

    $scope.appuntamento={};
    $scope.appuntamento.priorita="red";
    $scope.appuntamento.data= new Date();
});
