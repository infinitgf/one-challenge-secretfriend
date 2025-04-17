let amigos = [];

//presionar Enter key para agregar amigo
const input = document.getElementById("amigo");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

function agregarAmigo(){    
    let elem = document.getElementById("amigo").value;
    elem.trim();

    if(elem == "" || elem == " "){
        alert("Por favor, inserte un nombre.")
    }
    
    amigos.push(elem);
    actualizarLista();
    limpiarInput();
    return
}

function limpiarInput(){
    document.getElementById("amigo").value="";
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(a => `<li>${a}</li>`).join('');
}

function generarListado(array, listaID){
    
    let listaAmigos = document.getElementById(listaID);
    
    listaAmigos.innerHTML = "";

    for(let el = 0; el < array.length; el++){
        listaAmigos.innerHTML = `<li> ${array[el]} </li>`;
    }
    
    return
};

generarListado(amigos, 'listaAmigos');

function sortearAmigo(){
    let ganador;
    if(amigos.length > 0){
        ganador = Math.floor(Math.random() * amigos.length);
    }

    let resultado = document.getElementById("resultado");
    
    //Obtener el nombre sorteado    
    return resultado.innerHTML = `el ganador es: ${amigos[ganador]}`;
}