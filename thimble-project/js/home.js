

// asigna los eventos a un ítem del menú ...
// para para abrir y cerrar el modal correspondiente
function asignarEventosItem (itemId, modalId)
{
  // obtiene el elemento de item del menú
  let item = document.querySelector(itemId);

  // obtiene el modal
  let modal = document.querySelector(modalId);

  // obtiene el botón para cerrar el modal
  let cerrar = modal.querySelector(".cerrar");

  // declara el evento para abrir el modal
  item.onclick = function () {
    modal.style.display = "block";
  }

  // declara el evento para cerrar el modal
  cerrar.onclick = function () {
    modal.style.display = "none";
  }
}

// asigna los eventos a los ítems del menú
function asignarEventosMenu () {
  for (let i=1; i<=4; i++) {
    asignarEventosItem("#item" + i, "#modal" + i);
  }
}

// cierra el model de selección de nivel y el menú
function cerrarNivel () {
  document.querySelector("modal2").style.display = "none";
}


// obtiene el nivel de juego y cambia a la página del juego ...
// pasándole el nivel como parámetro
function jugar () {
 
  let nivel = document.querySelector("[name='nivel']:checked").value;
  let segundos;

  // establece los segundos según el nivel seleccionado
  switch (nivel) {
    case "facil":
      segundos = 9;
      break;
    case "medio":
      segundos = 6;
      break;
    case "dificil":
      segundos = 3;
      break;
  }

  document.location.href = "juego.html?seg=" + segundos;
}

// al cargar la página...
// asignla los eventos a los ítems del menú
window.addEventListener("load", asignarEventosMenu);

