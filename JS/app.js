$( document ).ready(function() {
    console.log( "ready!" );
    startOneCommandArtyom();
});

var artyom = new Artyom();


function startOneCommandArtyom(){
    artyom.fatality();// Detener cualquier instancia previa

    setTimeout(function(){// Esperar 250ms para inicializar
         artyom.initialize({
            lang:"es-ES",// Más lenguajes son soportados, lee la documentación
            continuous:false,// Reconoce 1 solo comando y basta de escuchar
            listen:true, // Iniciar !
            debug:true, // Muestra un informe en la consola
            speed:1, // Habla normalmente
            name: "Microsoft Helena - Spanish (Spain)"
        }).then(function(){

            hablar();

        });
    },250);
}

function hablar(){
    artyom.say("Hola estimado cliente, Soy tu mesero virtual. Bienvenido a la cevichería Sonia");

}