angular.module('app').controller('dettaglioCtrl',function($scope,appuntamento,AgendaSrv,$timeout,$stateParams){
    $scope.loading=true;

    $timeout(function(){
        $scope.appuntamento =AgendaSrv.getAppuntamento($stateParams.id);
        $scope.loading =false;

    },50);
    $scope.modifica =function(){
        console.log($scope.appuntamento)
    }
})