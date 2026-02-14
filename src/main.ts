// 1. Definição das funções (Nomes padronizados em inglês)
function multiply(a: number, b: number): number {
    return a * b;
}

function greeting(name: string): string {
    return `Hello ${name}`;
}

// 2. Definindo valores de entrada
const valorA: number = 400;
const valorB: number = 2;
const seuNome: string = "Guilherme";

// 3. Chamando as funções e armazenando os resultados
// Agora o nome da função (multiply) bate com a definição lá em cima!
const resultadoMultiplicacao = multiply(valorA, valorB);
const mensagemSaudacao = greeting(seuNome);


console.log("--- RESULTADOS ---");
console.log(`Cálculo: ${valorA} x ${valorB} = ${resultadoMultiplicacao}`);
console.log(`Saudação: ${mensagemSaudacao}`);

