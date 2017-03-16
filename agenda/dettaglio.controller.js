angular.module('app').controller('dettaglioCtrl',function($scope,appuntamento,AgendaSrv,$timeout,$stateParams,$state){
    $scope.loading=true;

    $timeout(function(){
        $scope.appuntamento =AgendaSrv.getAppuntamento($stateParams.id);
        $scope.loading =false;

    },50);
    //controller del tasto modifica
    $scope.modifica =function(){
      AgendaSrv.aggiornaAppuntamento($scope.appuntamento);
     
      //serve per tornare indietro dopo che abbiamo effettuato una modifica
      $state.go('/'); 
    }
    //controller del tasto indietro
    $scope.back=function(){  
        $state.go('/'); 
    }
})