// Exemplo de IF

// let numero = prompt("Digite aqui um número:");

// if(isNaN(Number(numero)) || numero === null){
//     console.log("Valor inválido");
// }
// else if(numero > 10){
//     console.log("É um número maior que 10");
// }
// else if(numero < 10){
//     console.log("É um número menor que 10");
// }
// else{
//     console.log("É O NÚMERO 10!");
// }

// Exemplo de WHILE

let limite = Number(prompt("Digite o limite do contador"));
let contador = 1;

while(contador <= limite){
    console.log(contador);
    contador = contador + 1;
}
