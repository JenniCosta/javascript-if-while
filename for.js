let lista = ['a', 'b', 'c', 'd', 'x'];
let objeto = {
    nome: "Rhodolpho",
    idade: 19,
    corFavorita: "azul",
    comidasFavoritas: ["lasanha", "açaí", "strogonoff", "coxinha"]
}

// For como alternativa para o while
for(let i = 0;i < lista.length; i++){
    //qqr coisa que voce queira fazer
    console.log(i);
    console.log(lista[i]);
}

console.log("-------------------------------------------")

// For-In para percorrer listas através dos ÍNDICES

for(let i in lista)
{
    console.log(i); 
    console.log(lista[i]);
}

console.log("-------------------------------------------")

// For-In também funciona para objetos
for(let atributo in objeto)
{
    console.log(atributo); 
    console.log(objeto[atributo]);
}

// For-Of também percorre listas, mas percorre os VALORES ao invés dos ÍNDICES.

for(let item of lista)
{
    console.log(item);
}