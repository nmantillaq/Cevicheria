$( document ).ready(function() {

    IniciarReconocimientoVoz();
});

var artyom = new Artyom();

function IniciarReconocimientoVoz(){
    //artyom.fatality();// Detener cualquier instancia previa

    artyom.initialize({
        lang:"es-ES",// Más lenguajes son soportados, lee la documentación
        continuous:false,// Reconoce 1 solo comando y basta de escuchar
        listen:true, // Iniciar !
        debug:true, // Muestra un informe en la consola
        speed:1 // Habla normalmente
    }).then(function(){        
        console.log("Reconocimiento de voz iniciardo");
        /*artyom.say("Hola estimado cliente, Soy tu SmartOrder virtual. Bienvenido a la cevichería Sonia");
        artyom.say("Puedes ver el menú con el botón, 'realiza tu pedido'");*/

        hablar2();
    });
    
}


function hablar(){
    artyom.say("por favor espere, estoy preparando un menú especial para usted");
}

function hablar2(){
    console.log("Reconocimiento de voz iniciardo");
    artyom.say("Hola estimado cliente, Soy tu SmartOrder virtual. Bienvenido a la cevichería Sonia");
    artyom.say("Puedes ver el menú con el botón, 'realiza tu pedido'");
    

    artyom.say("un momento, estoy obteniendo la mejor opción para usted");
    
    setTimeout(() => {
        window.location = "./carta.html";
    }, 2000);


    
}

