/*// Função em JS é First-Class Object (Citizens)
//Higher-order function

//criar de forma literal
function fun5() {}

//Armazenar em uma váriavel
const fun1 = function() {
    const fun2 = function () {
        const fun3 = function () {
            const fun4 = function () {

            }
        } 
    }
}
//Armazenar em uma array
const array = [function (a, b, c, d) {return (a + b) * c / d}]
console.log(array[0](5, 5, 2, 2))

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function() {
    return 'Hello World'
}
console.log(obj.falar())


// Passar função como parametro
function run (fun) {
    fun()
}
run(function() {
    console.log('Executando...')
})

// Uma função pode retornar/conter ema função
function soma(a,b){
    return function (c){
        console.log(a + b + c)
    }
}
soma(2, 3)(4)
const soman = soma(2, 3)
soman (4)
*/

function fun5(){ }

const fun1 = function(){
    const fun2 = function(){
        const fun3 =function(){
            const fun4 = function(){

            }
        } 

    }
}

const array = [function(a, b, c, d){return (a + b) * c / d}]
console.log(array[0](10, 10, 2, 2))

const obj = {}
obj.falar = function(){
    return 'Hello World'
}
console.log(obj.falar())

function run(fun){
    fun()
}
run(function(){
     console.log('Executando...')
})

function soma(a, b){
    return function(c){
        console.log((a + b) * c)
    }
}
soma (10, 10)(2)
const somaMais = soma(15, 15)
somaMais(2)
