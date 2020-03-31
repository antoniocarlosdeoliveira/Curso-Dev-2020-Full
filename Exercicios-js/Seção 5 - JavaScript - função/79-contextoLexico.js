const valor = 'Global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const calor = 'Local'
    minhaFuncao()
}

exec()
