/*const [a, b, c, d] = [3, 5, 1, 15]

const soma = a + b + c + d
const subtracao = d - b
const multiplicacao = a * b
const divisao = d / a
const modulo = a % 2

console.log(soma, subtracao, multiplicacao, divisao, modulo)
*/

const pessoa = {
  nome: 'Antonio',
  idade: 34,
  logradouro: {
    endereco: 'Rua ABC',
    numero: 974
  }
};

const {nome, idade} = pessoa;
console.log(nome, idade);
