angular.module('app').filter('filtroTitolo',function(){
    return function(lista,colore){
        if(colore =='tutte'){
            return lista;
        }
        return lista.filter(function(el){
            return el.priorita == colore;
        });
    }  

    
});