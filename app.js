let nombreSorteado=0;
let listaAmigos= [];

function agregarAmigo(){
    let amigo= document.getElementById("amigo").value.trim();
    console.log(amigo);

    if(amigo===""){
        alert("Ingresa un nombre real de un amigo");
        return;
    }

    listaAmigos.push(amigo);
    console.log(listaAmigos);
    
    actualizarListaAmigos();
    function limpiarCaja() {
        document.querySelector('#amigo').value ="";
    }
    limpiarCaja();
}

function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    let contenido = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        contenido += `<li>${listaAmigos[i]}</li>`;
    }
    lista.innerHTML = contenido;
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    let sorteo = Math.floor(Math.random()*listaAmigos.length);
    let amigoSorteado = listaAmigos[sorteo];

    let resultado= document.getElementById("resultado")
    let nombreSorteado= `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
    resultado.innerHTML = nombreSorteado;
}