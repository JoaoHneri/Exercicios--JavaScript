/*

Exercícios tirado da rocketseat  Discover:




Esse exercício vai trabalhar a transformação de notas escolares, onde devemos criar um algoritmo para transformar notas númericas em notas de caracteres.

Desafio:

Crie um algoritmo que transforme as notas do sistema
numérico para sistema de notas em caracteres tipo A B C D F

* de 90 para cima -   A
* entre 80 - 89   -   B
 * entre 70 - 79   -   C
 * entre 60 - 69   -   D
 * menor que 60    -   F
*/



 function avaliar(nota){
     if(nota >= 90){
     console.log("Parabéns Nota A");
     }else if(nota >=80 && nota <= 89){
     console.log("Parabéns Nota B");
     }else if(nota >=70 && nota <= 79){
     console.log("Nota C, você pode melhorar!");
     }else if(nota >=60 && nota <= 69){
     console.log("Nota D, melhorar ainda é possivel!");
     }else{
     console.log("Nota F, uma pena");
 }
 }

// avaliar(60);


//##################################################################################
/*Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [] 
    * despesas: []
Agora, crie uma função que irá calcular o total de receitas e 
despesas e irá mostrar uma mensagem se a família está com 
saldo positivo ou negativo, seguido do valor do saldo.
*/

let family = {
    ganhos: [1000],
    gastos: [800]
}

function somarArray(array){
    total = 0;
    for(let value of array){
        total +=value;
    }
    return total
}

function calculate(){
    const somaGanhos = somarArray(family.ganhos)
    const somarGastos = somarArray(family.gastos)


    const total = somaGanhos - somarGastos
    
    const ItsOkay = total >=0
    let mensage = "negativo"

    if(ItsOkay){
        mensage = "positivo"
    }

    console.log(`Seu saldo é ${mensage}: ${total}`)
}

// calculate()

//##################################################################################
function transformar(graus){
    const celsius = graus.toUpperCase().includes('C')
    const fahrenheint = graus.toUpperCase().includes('F')

    if(!celsius && !fahrenheint){
        throw new Error('Grau não identificado')
    }

    let novoGrau = Number(graus.toUpperCase().replace("F", ""));
    let formula = (fahrenheint) => (fahrenheint - 32) * 5/9
    let novoSimbol = 'C'

    if(celsius){
         novoGrau = Number(graus.toUpperCase().replace("C", ""));
         formula = celsius => celsius * 9/5 + 32
         novoSimbol = 'F'
    }

    return formula(novoGrau) + novoSimbol
}
/*
try {
    console.log(transformar('10C'))
    console.log(transformar('50F'))
    console.log(transformar('50Z'))
}catch(error){
    console.log(error.message)
}
*/

//##################################################################################

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Auguto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/



const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];

const totalCategory = booksByCategory.length
console.log(totalCategory);
for (let category of booksByCategory) {
    console.log('Total de livros por categoria: ' + category.category)
    console.log(category.books.length)
}
function autores(){
    let authors = [];
    for(let category of booksByCategory){
        for(let book of category.books){
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
            
        }
    }
    console.log("Quantidade de Autores: ",authors.length)
}
autores()

function bookOfAuthor(author){
    let books = [];

    for(let category of booksByCategory){
        for(let book of category.books){
            if(book.author === author){
                books.push(book.title)
            }
            
        }
    }
    console.log(`Livros do ${author}: ${books.join(". ")}`)
}

bookOfAuthor('Augusto Cury')

