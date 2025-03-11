let amigos = [];

function agregarAmigo(){    
    let elem = document.getElementById("amigo").value;
    //elem.trim();

    if(elem == "" || elem == " "){
        alert("Por favor, inserte un nombre.")
    }
    
    amigos.push(elem);
    actualizarLista();
    limpiarInput();
    return
}
console.log(amigos);

function limpiarInput(){
    document.getElementById("amigo").value="";
}

function actualizarLista() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = amigos.map(a => `<li>${a}</li>`).join('');
}

//Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
function generarListado(array, listaID){
    
    //Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
    let listaAmigos = document.getElementById(listaID);
    
    //Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
    listaAmigos.innerHTML = "";

    //Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for(let el = 0; el < array.length; el++){
        //Para cada amigo, crear un nuevo elemento de lista.
        listaAmigos.innerHTML = `<li> ${array[el]} </li>`;
    }
    
    return
};

generarListado(amigos, 'listaAmigos');

function sortearAmigo(){
    let ganador;
    //Validar que haya amigos disponibles
    if(amigos.length > 0){
        //Generar un índice aleatorio
        ganador = Math.floor(Math.random() * amigos.length);
    }

    //Obtener el nombre sorteado
    console.log(amigos[ganador]);
    
    let resultado = document.getElementById("resultado");

    return resultado.innerHTML = `el ganador es: ${amigos[ganador]}`;
}