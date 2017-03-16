angular.module('app').service('AgendaSrv',function(){
    var appuntamenti=[{
        id:1,
        titolo:"appuntamento con la chiesa",
        data: new Date(),
        descrizione:"oggi ci sara da divertirsi",
        luogo:"domus stella maris",
        priorità:"red",
        image:'http://media3.giphy.com/media/kEKcOWl8RMLde/giphy.gif'
    },
    {
        id:2,
        titolo:"appuntamento con la chiesa",
        data: new Date(),
        descrizione:"oggi ci sara da divertirsi",
        luogo:"domus stella maris",
        priorità:"yellow",
        image:'https://blog.fotolia.com/it/files/2016/07/1467830836GOT_ep_7_The_hound_s_wishful_thinking.gif'
    },
    {
        id:3,
        titolo:"appuntamento con la chiesa",
        data: new Date(),
        descrizione:"oggi ci sara da divertirsi",
        luogo:"domus stella maris",
        priorità:"green",
        image:'http://arma-dillo.dk/uploads/monthly_2017_01/giphy.gif.f6154a15519e7c6481e431d67fa73b1e.gif'
    }];

    var getAppuntamenti= function(){
        return appuntamenti;

    }
     var deleteAppuntamento =function(indice){
         appuntamenti.splice(indice,1);
     }
     var getAppuntamento=function(id){
         return appuntamenti.find(function(el){
             return el.id ==id;
         })
     }

     var aggiornaAppuntamento=function(app){
         var updateoggetto= angular.copy(app);
         var indice = appuntamenti.findIndex(function(el){
             return el.id ==app.id;
         })
         appuntamenti.splice(indice,1,updateoggetto);
          
     }

     var creaAppuntamento=function(app){
         var nuovo=angular.copy(app);
         var arrayId=[];
         appuntamenti.forEach(function(el){
             arrayId.push(el.id);
         });

         var id= Math.max(...arrayId);
         nuovo.id = ++id;
         appuntamenti.push(nuovo);
     }


    return{
        getAppuntamenti:getAppuntamenti,
        deleteAppuntamento:deleteAppuntamento,
        getAppuntamento:getAppuntamento,
        aggiornaAppuntamento:aggiornaAppuntamento,
        creaAppuntamento:creaAppuntamento
    }
})