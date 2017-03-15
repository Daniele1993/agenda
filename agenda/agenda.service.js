angular.module('app').service('AgendaSrv',function(){
    var appuntamenti=[{
        titolo:"appuntamento con la chiesa",
        data: new Date(),
        descrizione:"oggi ci sara da divertirsi",
        luogo:"domus stella maris",
        priorità:"#ffa500"
    }];

    var getAppuntamenti= function(){
        return appuntamenti;

    }
    return{
        getAppuntamenti:getAppuntamenti
    }
})