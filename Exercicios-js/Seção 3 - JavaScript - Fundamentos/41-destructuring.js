// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logradouro: 'Rua ABC',
        numero: 1000
    }
}

const { nome, idade} = pessoa
console.log(nome, idade)

const { nome: n, idade: i } = pessoa
console.log(n , i)

const { sobrenome, beHumrada = true} = pessoa
console.log(sobrenome, beHumrada)

const { endereco: { logradouro, numero, cep } } = pessoa
console.log(logradouro, numero, cep)


 /*
const pessoa = {
    nome: 'Joao', 
    idade:  3,
    logradouro: {
        endereco: 'Rua ABC',
        numero: 974
    }
}

const {nome, idade} = pessoa;
console.log(nome, idade);

const {nome: n, idade: i} = pessoa;
console.log(n, i);

const {sobrenome, Oliveira = true} = pessoa;
console.log(sobrenome, Oliveira);

const {logradouro: {endereco, numero, cep}} = pessoa;
console.log(endereco, numero, cep);
*/
