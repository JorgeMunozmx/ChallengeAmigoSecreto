// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
let numeroMax = 5;

function agregarAmigo()
    {
    let amigo = document.getElementById('amigo').value;
    if (listaAmigos.length<numeroMax)
        {
        if (listaAmigos.includes(amigo))
            { 
            alert('Nombre repetido');
            }
        else{    
            if (contieneSoloLetras(amigo))
                {
                listaAmigos.push(amigo);
                imprimirAmigos();
                console.log(listaAmigos);
                }
            else
                alert('Nombre no valido, usa solo letras por favor');
            }
        }
    else
        alert('Llegaste al numero Maximo de amigos')
    document.querySelector('#amigo').value = '';
    document.getElementById('amigo').focus();
    }   

function sortearAmigo()
    {
    if (listaAmigos.length==0)
        {
        alert('No hay amigos para sortear');
        return;
        }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    console.log(amigoSorteado);
    imprimirSorteado(amigoSorteado);
    }

function imprimirSorteado(amigoSorteado)
    {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `Tu amigo secreto es: ${amigoSorteado}`;    
    }


function imprimirAmigos() 
    {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    listaAmigos.forEach(elemento => {
    const li = document.createElement("li");
    li.textContent = elemento; // Asignamos el texto
    lista.appendChild(li); // Lo añadimos a la lista
    });
    }

function contieneSoloLetras(cadena) 
    {
    const regex = /^[a-zA-Z]+$/; // Solo letras mayúsculas y minúsculas
    return regex.test(cadena);
    }

