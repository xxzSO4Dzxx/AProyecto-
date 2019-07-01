
let segundos = 0;				// variable para guardar la duración en segundos de cada pregunta
let tiempo = 10;				// variable para guardar el tiempo transcurrido en segundos de cada pregunta
const cant_vueltas = 10;		// variable para guardar la cantidad de vueltas del juego
let vuelta = 0;					// variable para guardar la vuelta actual
let resultado = 0;				// variable para guardar el resultado temporal
let reloj;						// variable para guardar el timer


// lee el nivel del juego recibido en la dirección
function leerNivel () {
  // search devuelve el ? y lo que le sigue en la dirección
  let direccion = document.location.search;
  let igual = direccion.lastIndexOf("=");
  let numero = direccion.slice(igual + 1);
  // guarda la duración en la variable segnudos
  segundos = parseInt(numero);
}


// Retorna un número aleatorio >= 0 y < n
function randomN (n)
{
	return Math.floor(Math.random() * n);
}

// Desordena un array
function desordenarArray (array)
{
	let longitud = array.length;

	// Recorre el array
	for (let i=0; i < longitud; i++)
	{
		// Intercambia de lugar el valor del elemento acutal
		//...con el valor de otro elemento aleatorio
		let rand = randomN(longitud);
		let temp = array[i];
		array[i] = array[rand];
		array[rand] = temp;
	}
}

// Inicializa el juego
function inicializarJuego () {
	leerNivel();

    document.querySelector("#boton0").addEventListener("click", verificarRespuesta);
    document.querySelector("#boton1").addEventListener("click", verificarRespuesta);
	
	desordenarArray(reciclables);
	desordenarArray(noReciclables);

	inicializarVuelta();
}

// Inicializa la vuelta 
function inicializarVuelta () {
	cargarImagenes();
	tiempo = segundos;
	document.querySelector("#timeCount").textContent = tiempo ;
	// Lanza el timer, una vez por segundo
	reloj = setInterval(actualizarTiempo, 1000);
}


// lee el nivel del juego recibido en la dirección
function cargarImagenes () {
	let posicionNoReciclado = 0
	let posicionReciclado = 1;

	if (Math.random() > 0.5) {
		posicionNoReciclado = 1;
		posicionReciclado = 0;
	}
	
	document.querySelector("#img" + posicionNoReciclado).src = "img/norecic/" + noReciclables[vuelta].img;
	document.querySelector("#nombreImg" + posicionNoReciclado).textContent =  noReciclables[vuelta].nombre;
	document.querySelector("#img" + posicionReciclado).src = "img/recic/" + reciclables[vuelta].img;
	document.querySelector("#nombreImg" + posicionReciclado).textContent =  reciclables[vuelta].nombre;
}


// Calcula el ancho de la barra de resultado
function calcularAnchoBarra (puntos) {
	const ancho_maximo = 107;
	// Hace una regla de tres simple
	return puntos * ancho_maximo / 100;
}


function verificarRespuesta () {
  // Busca la imagen dentro del botón
  let boton = this;
  let imagen = boton.querySelector("img");

  // Chequea si la imagen proviene de la carpeta de reciclables
  let indice = imagen.src.indexOf("/recic/");
  if (indice != -1) {	// Respuesta Correcta
    resultado += 10;
    document.querySelector("#progressBar").style.width = calcularAnchoBarra(resultado) + "px";
  }
  cambiarPregunta();
}

function cambiarPregunta () {
	clearInterval(reloj);
	vuelta++;
	if (vuelta < cant_vueltas) {
		inicializarVuelta();
	}
	else {
		document.location.href = "resultado.html?res=" + resultado;
	}
}

function actualizarTiempo () {
	tiempo--;
	document.querySelector("#timeCount").textContent = tiempo ;
	if (tiempo == 0)
	{
		cambiarPregunta();
	}
}

// al cargar la página inicializa y comienza el juego
window.addEventListener("load", inicializarJuego);
