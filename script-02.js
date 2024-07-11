var pessoalA = {
    nome: 'Arthur',
    idade: 40,
    favoritos: ['Filmes', 'Jogos'],
}

var pessoalB = {
    nome: 'Mannu',
    idade: 30,
    favoritos: ['Pizza', 'Sushui'],
}



var listaPessoas = [pessoalA, pessoalB]

console.log(listaPessoas.map((pessoa) => pessoa.nome));
console.log(listaPessoas.map((pessoa) => pessoa.idade));
console.log(listaPessoas.map((pessoa) => pessoa.favoritos));