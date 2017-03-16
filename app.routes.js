angular.module('app').config(function($stateProvider,$urlRouterProvider){
    
    $urlRouterProvider.otherwise('/');
    $urlRouterProvider.when('','/');

    $stateProvider.state('/',{
        url:'/',
        controller:'AgendaCtrl',
        templateUrl:'agenda/agenda.template.html',
        resolve:{
           appuntamenti:function(AgendaSrv){
               return AgendaSrv.getAppuntamenti
           }
        }
    })
    .state('dettaglio',{
        url:'/dettaglio/:id',
        templateUrl:'agenda/dettaglio.template.html',
        controller:'dettaglioCtrl',
         resolve:{
             appuntamento:function(AgendaSrv,$stateParams){
                 return AgendaSrv.getAppuntamenti($stateParams.id)
             }
         },
         onEnter:function(appuntamento){
             console.log("sono entrato");
             console.log(appuntamento);
         },
         onExit:function(){
             console.log("sono uscito");
         }
    
    })
        .state('crea',{
            url:'/crea',
            templateUrl:'agenda/nuova.template.html',
            controller:'NuovoCtrl'

        })
});