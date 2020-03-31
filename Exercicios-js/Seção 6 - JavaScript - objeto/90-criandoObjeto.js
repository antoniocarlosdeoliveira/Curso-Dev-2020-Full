// usando a notação literal
const obj1 = {}
console.log(obj1)

// objeto em JS
console.log(typeof Object, typeof new Object)
const obj2 = new Object
console.log(obj2)



// Funções construtoras
function Produto(nome, preco, desc) {
    this.nome
    this.getPrecoComDesconto = () => {
        return preco * (1 - desc)
    }
}

const p1 = new Produto('Caneta', 7.99, 0.15)
const p2 = new Produto('Notebook', 2998.99, 0.25)
console.log(p1.getPrecoComDesconto(), p2.getPrecoComDesconto())


// Função Factory
function criarFuncionario(nome, salarioBase, faltas) {
    return {
        nome,
        salarioBase,
        faltas,
        getSalario() {
            return (salarioBase / 30) * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Rodrigo', 30899, 5)
const f2 = criarFuncionario('ana', 5000, 3)
console.log(f1.getSalario(), f2.getSalario())

// Objeto.create

const filha = Object.create(null)
filha.nome = 'Ana'
console.log(filha)

// Uma função famosa que retorna Objeto...
const
 fronJSON = JSON.parse('{"info": "Sou um JSOM"}')
 console.log(fronJSON.info)

