let amigos = [];

function agregarAmigo(){    
    let elem = document.getElementById("amigo").value;

    if(elem == ""){
        alert("Por favor, inserte un nombre.")
    } else {
        amigos.push(elem);    
    };

    console.log(amigos);
    
    elem = document.getElementById("amigo").value="";

    //Crea una función que recorra el array amigos y agregue cada nombre como un elemento <li> dentro de una lista HTML. 
    // Usa innerHTML para limpiar la lista antes de agregar nuevos elementos.
    function recorrerArray(array, lista){

        //Utilizar document.getElementById() o document.querySelector() para seleccionar la lista donde se mostrarán los amigos.
        let listaAmigos = document.getElementById(lista);

        //Establecer lista.innerHTML = "" para asegurarse de que no haya duplicados al actualizar.
        lista.innerHTML = "";

        //Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
        for(let el = 0; array.lenght > 0; el++){
            //Para cada amigo, crear un nuevo elemento de lista.
            listaAmigos = document.createElement('li').value = el;
        }

        return 
    };
    
    recorrerArray(amigos, 'listaAmigos');
    return 
}

