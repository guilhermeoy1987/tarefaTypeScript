// 1. Definição das funções (Nomes padronizados em inglês)
function multiply(a, b) {
    return a * b;
}
function greeting(name) {
    return "Hello ".concat(name);
}
// 2. Definindo valores de entrada
var valorA = 400;
var valorB = 2;
var seuNome = "Guilherme";
// 3. Chamando as funções e armazenando os resultados
// Agora o nome da função (multiply) bate com a definição lá em cima!
var resultadoMultiplicacao = multiply(valorA, valorB);
var mensagemSaudacao = greeting(seuNome);
console.log("--- RESULTADOS ---");
console.log("C\u00E1lculo: ".concat(valorA, " x ").concat(valorB, " = ").concat(resultadoMultiplicacao));
console.log("Sauda\u00E7\u00E3o: ".concat(mensagemSaudacao));
