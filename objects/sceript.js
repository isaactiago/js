
//  aula 16  --o q sao objetos 


/* 

let nome = 'isaac' ; 

let nomes = ['iasaac' , 'pewdro']

let personagem = {

    nome:'ISAAC',

    iadade: 18 ,
    pais: 'brasil',

    olhos : ["preto" , "azul"], //array

    caracteristicas : {
        magia: 5 , 
        estamina : 1 , 
        força : 20 , 

    }
}


console.log(`${personagem.nome} tem ${personagem.iadade} e mora no ${personagem.pais}`)

console.log(personagem.caracteristicas.força)

console.log(personagem.olhos[1])

*/


// aula 17 --  Acessando e alterando objetos





/* 
let nome = 'isaac' ; 

let nomes = ['iasaac' , 'pewdro']

let personagem = {

    nome:'ISAAC',

    iadade: 18 ,
    pais: 'brasil',

    olhos : ["preto" , "azul"], //array

    caracteristicas : {
        magia: 5 , 
        estamina : 1 , 
        forca : 20 , 

    }
}

personagem.nome = 'semem' ; //aqui eu troco o objeto 

personagem.caracteristicas.forca += 5 ; //aumentando a força em 5 


personagem.olhos.push('verde')

console.log(personagem.olhos) ; 
*/


/* 

let personagem = {
    nome: 'isaac', 
    idade : 18 , 
    carros : [
        { modelo:'fiat' , cor : 'preto'} ,
        { modelo: 'ferrari' , cor : 'vermelho'}
    ]
}

console.log(personagem.carros[0].modelo + ' ' +  personagem.carros[0].cor)

console.log(personagem.carros[1].modelo + ' ' + personagem.carros[1].cor)


*/


// aula 18 -- Função dentro de objeto 


let pessoa = {
    nome: 'isaac',
    sobrenome: 'wandermurem' ,
    idade : 18 ,

    nomeCompleto : function(){
        return ` ${this.nome} ${this.sobrenome}`;
    } ,
}

console.log(pessoa.nomeCompleto()) ; 






