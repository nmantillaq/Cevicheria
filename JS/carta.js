$( document ).ready(function() {
    IniciarReconocimientoVoz();
});

var artyom = new Artyom(); //Inicializando Asistente
function IniciarReconocimientoVoz(){
    artyom.initialize({
        lang:"es-ES",
        continuous:false,
        listen:true,
        debug:true,
        speed:1
    }).then(function(){        
        console.log("Reconocimiento de voz iniciardo");
        artyom.say("Hola estimado cliente, Soy tu SmartOrder virtual. Bienvenido a la cevichería Sonia");
        artyom.say("Puedes ver el menú con el botón, 'realiza tu pedido'");       
        
    });    
}

function BotonAction(){
    artyom.say("por favor espere, estoy preparando un menú especial para usted");
    //Espera de 2 segundo
    setTimeout(() => {
        BrindarOpcionesCarta();
    }, 2000);
}

function BrindarOpcionesCarta(){
    console.log("Reconocimiento de voz iniciardo");
    artyom.say("Tenemos la siguientes opciones en la carta del día de hoy");
}

