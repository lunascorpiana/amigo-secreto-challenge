// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    let nombre = document.getElementById("nombreAmigo").value; // Captura el valor del input

    // Validación para que no se agreguen nombres vacíos
    if (nombre.trim() === "") {
        alert("Por favor, inserte un nombre.");
        return; // Sale de la función si el campo está vacío
    }

    // Agregamos el nombre al array
    amigos.push(nombre);

    // Limpiamos el campo de texto
    document.getElementById("nombreAmigo").value = "";

    // Actualizamos la lista visual
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Borra la lista anterior para actualizarla limpia

    // Recorremos el array y mostramos cada nombre
    amigos.forEach(function (amigo) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}