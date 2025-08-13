// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Se declara variable tipo arreglo para los nombres de amigos
let listaDeAmigos = [];

//Función para agregar un amigo al arreglo
function agregarAmigo() {
    //Hacemos uso de la caja de texto del input con el id amigo
    let inputAmigo = document.getElementById("amigo");

    // Guardar el valor escrito y eliminar espacios al inicio y final
    let nombre = inputAmigo.value.trim();

    // Comparamos que la caja de texto no este vacia
    if (nombre === "") {
        alert("Ingresa un nombre, no puede ir vacio");
        return; // Si está vacío, no continuamos
    }

    //Guardamos el nombre en el arreglo 
    listaDeAmigos.push(nombre);

    //mandamos a llamar la funcion de lista que actualiza el html para mostrar la lista
    mostrarLista();

    // Limpiar el campo de texto para el siguiente nombre
    inputAmigo.value = "";
}

 // Funcion para ir mostrando los nombres de amigos en pantalla
function mostrarLista() {
    
    //Se accede al document del elemento ul para mostrar la lista de nombres de amigos
    let listaNombreAmigos = document.getElementById("listaAmigos");

    // Asignamos espacios para limpiar lista 
    listaNombreAmigos.innerHTML = "";

    // Recorremos el array listaDeAmigos
    listaDeAmigos.forEach(function(amigo) {
        // Creamos un nuevo elemento <li>
        let li = document.createElement("li");

        // Ponemos el nombre del amigo dentro del <li>
        li.textContent = amigo;

        // usamos  <li> para elementos de la lista desordenada <ul> 
        listaNombreAmigos.appendChild(li);
    });
}

function sortearAmigo() {
    // Validamos que la lista no esté vacía como minimo 2 amigos para jugar 
    if (listaDeAmigos.length < 2) {
        alert("No hay Amigos para Escoger, como minimo ingresa dos amigos");
        return; // Si no hay nombres, detenemos la función
    }

    // guardamos un numero aleatorio 
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);

    // Obtener el nombre que está en esa posición aleatoria
    let amigoSecreto = listaDeAmigos[indiceAleatorio];

    // Seleccionamos el <ul> donde mostraremos el resultado
    let amigoSeleccionado = document.getElementById("resultado");

    // Imprimimos la varible del amigo secreto<li>
    amigoSeleccionado.innerHTML = `<li> El amigo secreto es: ${amigoSecreto}</li>`;

     //Al momento de sortar el amigo secreto borra la lista para que se ingresen nuevos nombres 
     //se activa nuevamente funcion sortear amigo pero como esta vacio se da su alert No hay amigos   
    listaDeAmigos= [];
    document.getElementById("listaAmigos").innerHTML = "";
}




































