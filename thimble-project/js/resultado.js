
function leerResultado () {
  // search devuelve el ? y lo que le sigue en la dirección
  let direccion = document.location.search;
  let igual = direccion.lastIndexOf("=");
  let numero = direccion.slice(igual + 1);

  // obtiene el resultado del juego
  let resultado = parseInt(numero);

  // muestra la imagen correspondiente según si el juegador ganó o perdió la partida
  if ( resultado < 70 ) {
    document.querySelector("#feedback_bien").style = "display: none;";
    document.querySelector("#feedback_mal").style = "display: block;";
  }

  // muestra el reultado
  document.querySelector("#puntos").textContent = resultado;
}

// retorna a la pantalla princip
function volver () {
  document.location.href = "index.html";
}


// al cargar la página lee el resultado del juego...
// y muestra el cartel correspondiente
window.addEventListener("load", leerResultado);
