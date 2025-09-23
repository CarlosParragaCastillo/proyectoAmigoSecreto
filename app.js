let nombreSorteado=0;
let listaAmigos= [];

function agregarAmigo(){
    let amigo= document.getElementById("amigo").value;
    console.log(amigo);

    if(amigo===""){
        alert("Ingresa un nombre real de un amigo");
        return;
    }

    listaAmigos.push(amigo);
    console.log(listaAmigos);
    
    function limpiarCaja() {
        document.querySelector('#amigo').value ="";
    }
    limpiarCaja();
}


function sortearAmigo(){
    nombreSorteado= RandomSource(listaAmigos);
    let resultado= nombreSorteado;
    console.log(nombreSorteado);
}

/* 
id="amigo"
onclick="agregarAmigo()"

id="listaAmigos"
id="resultado"

onclick="sortearAmigo()"
*/
