//le aviso a JS que tengo una pag de inicio, de Bienvenida, etc...
const pInicio =  document.getElementById ("inicio");
const pBienvenida = document.getElementById("Bienvenida");
const pPreguntasTierra = document.getElementById("triviaTierra");
const pPreguntasEspacio = document.getElementById("triviaEspacio");
const paginaFinal = document.getElementById("paginaFinal");


//Le pedimos al usuario ingresar nombre
let name; //reservamos espacio en memoria para name
const send = document.getElementById('enviar');//este es el boton al que le tenemos que hacer click
send.addEventListener('click', function() {
  name = document.getElementById('nombreJugador').value; //value es el valor interno que tiene el componente input
  document.getElementById("nombre").textContent = name; //text Content es la propiedad del elemento SPAN
  //estamos ocultando la pagina inicio cuando demos click en enviar
  pInicio.style.display = "none";
  //y aqui estamos mostrando la pagina sgte :)
  pBienvenida.style.display = "block";
})


//tengo darle funcionalidad el botón tierra
const botonTierra = document.getElementById("tierra");//este es el click de boton tierra//
botonTierra.addEventListener('click',function(){ 
  //aqui quiero que al hacer click en el botonTierra, se abra la pantalla pPreguntas
  pBienvenida.style.display = "none";
  pPreguntasTierra.style.display = "block";
})


//tengo que darle funcionalidadd al boton espacio
const bEspacio = document.getElementById("espacio") //botón a espacio
bEspacio.addEventListener('click', function(){
  pBienvenida.style.display = "none";
  pPreguntasEspacio.style.display = "block";
}) 


//reservar un espacio en memoria para el texto, aqui estamos reservando el espacio para las preguntas y opciones de respuesta, para despues llamarlas por arrays
let preguntasTierra = [ 
  {
    preguntaT:"El Planeta tierra esta compuesto en su mayoría por:",
    opcion1:"Tierra",
    opcion2:"Agua",
    opcion3:"Lava",
    respuesta: "Agua"
  },
  {
    preguntaT:"Cuantos polos magnéticos tiene la tierra:",
    opcion1:"2 Polos",
    opcion2:"3 Polos",
    opcion3:"4 Polos",
    respuesta: "2 Polos"
  },
  {
    preguntaT:"Cuando es el Día de la Tierra:",
    opcion1:"10 de octubre",
    opcion2:"22 de abril",
    opcion3:"13 de agosto",
    respuesta: "22 de abril" 
  }
];

//estas preguntas las dejamos como comentario porque las estamos desarrollando, y por el momento, llamamos las preguntas a la pagina como texto desde el htm.
//let preguntasEspacio = [ 
  //{
    //preguntaE:"El Sol es:",
    //opcion1:"Un planeta",
    //opcion2:"Una estrella",
    //opcion3:"Un Satélite",
    //respuesta: "Una estrella"
  //},
  //{
    //preguntaE:"La Luna es:",
    //opcion1:"Un Planeta",
    //opcion2:"Una Estrella",
    //opcion3:"Un Satélite",
    //respuesta: "Un Satélite"
  //},
  //{
    //preguntaE:"El planeta más cercano al Sol es:",
    //opcion1:"Mercurio",
    //opcion2:"Marte",
    //opcion3:"Venus",
    //respuesta:"Mercurio" 
  //}
//];


//Boton CONTINUAR TIERRA
const continuarT = document.getElementById("bContinuarT");
continuarT.addEventListener("click", function(){
  pPreguntasTierra.style.display = 'none';
  paginaFinal.style.display = 'block';
})


//Boton CONTINUAR ESPACIO
const continuarE = document.getElementById("bContinuarE");
continuarE.addEventListener("click", function(){
  pPreguntasEspacio.style.display = 'none';
  paginaFinal.style.display = 'block';
})


//Boton REINICIAR TRIVIA
const reiniciar = document.getElementById("volverAjugar");
reiniciar.addEventListener("click", function(){
  paginaFinal.style.display = 'none';
  pInicio.style.display = 'block';
})


//tenemos que decirle a JS que en document hay lugares para Q&A
const preguntaT = document.getElementById("h1questionT");
const opcion1 = document.getElementById("bOpt1T");
const opcion2 = document.getElementById("bOpt2T");
const opcion3 = document.getElementById("bOpt3T");


//quiero tomar el elemento h1question(pregunta) y traerloaqui
preguntaT.textContent = preguntasTierra[0].preguntaT;
opcion1.textContent = preguntasTierra[0].opcion1;
opcion2.textContent = preguntasTierra[0].opcion2;
opcion3.textContent = preguntasTierra[0].opcion3;

//version espacio
//preguntaE.textContent = preguntasEspacio[0].preguntaE;
//opcion1.textContent = preguntasEspacio[0].opcion1;
//opcion2.textContent = preguntasEspacio[0].opcion2;
//opcion3.textContent = preguntasEspacio[0].opcion3;


//creamos una variable respuestas correctas
let respuestasCorrectas = 0;
console.log(respuestasCorrectas);

//Dar funcionalidad a los botones opcion1
//const bOpt1T=document.getElementById("bOpt1T")
opcion1.addEventListener('click',function(){//quiero que el boton cambie de color- ponerle la condicion... que si es correcto sea verde, incorrecto sea rojo
//aqui le estoy diciendo que la opcion1 esta dentro de preguntasTierra
  if (preguntasTierra[0].opcion1 === preguntasTierra[0].respuesta){
    opcion1.style.background = "green";
    respuestasCorrectas++;
  }
  else{
    opcion1.style.background = "red";
  }
})
//Dar funcionalidad a los botones opcion2
const bOpt2T=document.getElementById("bOpt2T")//le estoy diciendo a js que tengo un boton en html
//le agrego un evento... que haga un click y de agrego una funcion condicional
bOpt2T.addEventListener('click',function(){
  if (preguntasTierra[0].opcion2 === preguntasTierra[0].respuesta) {
    //si es correcta se va a poner de color verde y va a sumar
    opcion2.style.background = "green";
    respuestasCorrectas++;
  }
    //ahora le indico que si la respuesta es incorrecta se va a poner de color rojo
  else{
    opcion2.style.background = "red";
    respuestasCorrectas++;
  }
})
//Dar funcionalidad a los botones opcion3
const bOpt3T = document.getElementById("bOpt3T")

bOpt3T.addEventListener('click',function(){
  if (preguntasTierra[0].opcion3 === preguntasTierra[0].respuesta){
    opcion3.style.background = "green";
    respuestasCorrectas++;
  }
  else{
    opcion3.style.background = "red";
  }
})


    