// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo(){
    let elem = document.getElementById("amigo").value;

    if(elem == ""){
        alert("Por favor, inserte un nombre.")
    } else {

        amigos.push(elem);
        console.log(amigos);
    }

    console.log(elem);

    return amigos;
}

console.log(amigos.length);
