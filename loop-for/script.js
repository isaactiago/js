// aula 19 --  O loop for

//o loop é quando um codigo seja exectutado diversas vesses.

/* 
o for precisa de 3 coisas para funciona : 

- o inicio do contador 
- a condicional para o codigo executar
-transforma o segundo processo em somar mais uma coisa 

*/

//ex

/* 
for(let n = 0 ; n <= 10 ; n++){
    console.log(' frase qualquer ' + n)
}
*/


// aula 19 --Dando loop em arrays

/* 
let cores = [
    { nome :'preto' , qt: 10} ,
    { nome : 'vermelho', qt: 5} ,
    { nome :'branco' , qt : 2} , 
    { nome : 'azul' , qt : 1} ,
]
*/



//cores.push('verde') ;

// ------ 1 forma de fazer 

//for(let n = 0 ; n < cores.length ; n++  ){
   // console.log(cores[n])
//}

// --- 2 forma de fazer


/* 
for(let i in cores){ // o i é a chave do meu array 
    console.log(` Nome : ${cores[i].nome} - ${cores[i].qt}`);
}
*/




// -- 3 forma de fazer

/* 
for(let cor of cores){ //esse esta se referindo ao valor 
    console.log(` Nome : ${cor.nome} - ${cor.qt}`);
}

*/


let soma = 0 ;

for(let i = 0 ; i<= 5 ; i++){
    let somar = soma - i ;
    console.log(somar)
}
