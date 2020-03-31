const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

aprovados.forEach(function(nome, indice, Array) {
  console.log(`${indice + 1}) ${nome}`)
  console.log(Array);
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados);
aprovados.forEach(exibirAprovados);