var formulario = document.querySelector("#formulario");
var listaInvitados = document.getElementById("lista-de-invitados"); // Obtenemos la referencia al contenedor de la lista de invitados

formulario.onsubmit = function(e) {
  e.preventDefault();
  
  var nombre = formulario.elements[0].value;
  var edad = formulario.elements[1].value;
  var nacionalidad = formulario.elements[2].value;
  
  var nacionalidadTexto = "";
  switch (nacionalidad) {
    case "ar":
      nacionalidadTexto = "Argentina";
      break;
    case "mx":
      nacionalidadTexto = "Mexicana";
      break;
    case "vnzl":
      nacionalidadTexto = "Venezolana";
      break;
    case "per":
      nacionalidadTexto = "Peruana";
      break;
  }
  
  if (nombre.length === 0) {
    formulario.elements[0].classList.add("error");
  }
  if (edad < 18 || edad > 120) {
    formulario.elements[1].classList.add("error");
  }

  if (nombre.length > 0 && (edad >= 18 && edad <= 120)) {
    agregarInvitado(nombre, edad, nacionalidadTexto);
    formulario.reset(); // Reiniciamos el formulario después de agregar un invitado
  }
};

function agregarInvitado(nombre, edad, nacionalidad) {
  var elementoLista = document.createElement("div");
  elementoLista.classList.add("elemento-lista");
  
  var spanNombre = document.createElement("span");
  var inputNombre = document.createElement("input");
  var espacio = document.createElement("br");
  spanNombre.textContent = "Nombre: ";
  inputNombre.value = nombre;
  elementoLista.appendChild(spanNombre);
  elementoLista.appendChild(inputNombre);
  elementoLista.appendChild(espacio);
  
  function crearElemento(descripcion, valor) {
    var spanNombre = document.createElement("span");
    var inputNombre = document.createElement("input");
    var espacio = document.createElement("br");
    spanNombre.textContent = descripcion + ": ";
    inputNombre.value = valor;
    elementoLista.appendChild(spanNombre);
    elementoLista.appendChild(inputNombre);
    elementoLista.appendChild(espacio);
  }
  
  crearElemento("Edad", edad);
  crearElemento("Nacionalidad", nacionalidad);
  
  var botonBorrar = document.createElement("button");
  botonBorrar.textContent = "Eliminar invitado";
  botonBorrar.classList.add("boton-borrar"); // Agregamos la clase "boton-borrar" para aplicar estilos
  
  botonBorrar.onclick = function() {
    elementoLista.remove(); // Eliminamos el elemento de la lista al hacer clic en el botón
  };
  
  elementoLista.appendChild(botonBorrar); // Agregamos el botón al elemento de la lista
  
  listaInvitados.appendChild(elementoLista); // Agregamos el elemento de la lista al contenedor de la lista de invitados
}