// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let elem = document.getElementById("amigo").value;

    if(elem == ""){
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(elem);    
    }
    
    elem = document.getElementById("amigo").value="";

    return document.getElementById('listaAmigos').textContent = amigos;
}