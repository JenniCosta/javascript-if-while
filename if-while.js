// Exemplo de IF

let numero = prompt("Digite aqui um número:");

if(isNaN(Number(numero)) || numero === null){
    console.log("Valor inválido");
}
else if(numero > 10){
    console.log("É um número maior que 10");
}
else if(numero < 10){
    console.log("É um número menor que 10");
}
else{
    console.log("É O NÚMERO 10!");
}

// Exemplo de WHILE

// inicialização
let limite = Number(prompt("Digite o limite do contador"));
let i = 1;

while(i <= limite){ // condição
    console.log(i);

    // atualização
    // i = i + 1;
    // i += 1;
    i++;
}
