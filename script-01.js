// var pessoa = {
//     nome: 'Arthur',
//     idade: 30,
//     hobbies: ['jogar', ['comer']]
// }

// map()
    // .length
    // filter()
    // foreach()
    // sort()
    // find()


    // https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript-pt

    // JSON.parse(str) // TEXTO (str) => JSON
    // JSON.stringify() // JSON => TEXTO (str)
    // Object.keys() // Lista todas as chaves (key) do objeto
    // Object.assign() // Clonar
    // Object.values() // Lista todos os valores (value) do objeto

    

    var a = 10
    var b = 20
    var c = a

    console.log(c)
    a = 20
    console.log(c)
    console.log(a)


    var objA = {
        nome: 'Joao',
        idade: 20,
        hobbies: ['jogar', 'comer']
    }
    var objB = {
        nome: 'jose',
        idade: 30,
        hobbies: ['jogar', 'comer']
    }
    var objC = {
        nome: 'Joao',
        idade: 20,
        hobbies: ['jogar', 'comer']
    }

    objC = Object.assign({}, objA); 

    console.log(objC)
    objA.nome = 'joaquim'
    console.log(objC)
    console.log(objA)
    objC.nome = 'chuchu'
    console.log(objC)
    console.log(objA)

    objC = {
        nome: 'maria',
        idade: 50
    }

    console.log(objC)
    console.log(objA)