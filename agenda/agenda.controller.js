angular.module('app').controller('AgendaCtrl',function($scope,AgendaSrv){

    $scope.appuntamenti=AgendaSrv.getAppuntamenti();
    console.log($scope.appuntamenti);

});