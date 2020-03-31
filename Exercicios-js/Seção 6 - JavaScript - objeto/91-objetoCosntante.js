// pessoa -> 123 -> {...}
const pessoa = { nome: 'João' };
pessoa.nome = 'Pedro';
console.log(pessoa);

// pessoa -> 456 -> {...}
//pessoa = {nome: 'Ana'};


// Não deixa ninguem modificar
Object.freeze(pessoa);

pessoa.nome = 'Maria';
pessoa.end = 'Rua ABC';
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa)


const pessoaContante = Object.freeze({ nome: 'Joao'});
pessoaContante.nome = 'Maria';
console.log(pessoaContante);