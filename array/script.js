//aula 13 -- introdução a array 

//let colors  =  ["blue" , "red" , "green"] ;

//console.log(colors[2]);

//let idades = [10 , 20 , 30] ;

//let lista = ['algo' , 30 , 'blala' , false] ;


//array dentro de array : 

//let nomes = ['boniek' , 'isaac' , 'pedro'];

//let lista = ['blabla', nomes] ;

//let lista = ['blabla' , ['xx' , 'yy']];

//console.log(lista[1][0])



//aula 14 -- Operações básicas de array 


//let ingredientes = ['agua', 'farinha', 'ovo', 'corante' , 'sal'];



//ingredientes.push('cebola') // esse push ira adicionar mas um elemento ao array 

//ingredientes.pop(); // a função "pop" , remove o ultimo item do meu array

//ingredientes.shift() ; //a função "shift" , remove o primeiro item do meu array
//console.log(`total de ingredientes :  ${ingredientes.length}`)

//${ingredientes.length} = esse lenght vai retorna um numero, ou seja a quantidade de intens que eu tenho no meu array 


//aula 15 --objetos 


/* 


function algo(nome,sobrenome){
    let nomes = ["isaac" , "pedro "]

    if(nomes === 0){
        return 'ola isaac'
    }
}


*/


// aula 23 -- funções de array 

//let frutas = ['maça' , 'uva' , 'laranja' , 'banana']

//frutas[1] = 'pera' ; //aqui eu consigo trocar a por algo no meu array
//frutas.push('abacaxi')

//frutas[frutas.length - 1] = 'pera' // trocando o ultimo item por pera 

//pop = remove o ultimo



//console.log(frutas.join(' , '));



// aula 24 -- Ordenação de array 

//let frutas = ['uva' , 'laranja', 'maça' , 'banana']; 

//frutas.sort(); // ordenara meu array em ordem alfabetica

//frutas.reverse(); // vai inverte a ordem alfabetica

//console.log(frutas)


/* 
let cars = [
    {brand: 'fiat' , ano: 2022},
    {brand: 'BMW' , ano : 2018}, 
    {brand : 'ferrari' , ano: 2020},
   
]
*/

//cars.sort((a,b) => {

    /* 
        if(a.ano > b.ano ){
            return 1 ;
        } else if(a.ano < b.ano){
            return -1;
        }else {
            return 0 ;
        }

    */ 

        //ou 

      //  return a.ano - b.ano ; 
        
//})

//console.log(cars)






/* 


let dados = [
    {nome: 'isaac' , idade : 18} , 
    {nome : 'tiago' , idade : 15},
    {nome : 'bia' , idade : 16},
    {nome : 'ana' , idade : 10},
    {nome : 'vini' , idade : 25},
]


dados.sort((a,b)=> {

    if(a.idade > b.idade){
        return 1 ;
    }else if(a.idade < b.idade){
        return - 1 ;
    }else{
        return 0 ; 
    }

})

console.log(dados)
*/


/* 
let rico = [
    {nome : 'isaac' , salario : 20000} ,
    {nome : 'uuuuac' , salario : 1200} ,
    {nome : 'oooc' , salario : 500} ,
    {nome : 'gfdgc' , salario : 10000} ,
    {nome : 'fgdg' , salario : 8000} ,
]

rico.sort((a,b) =>{
    if(a.salario > b.salario){
        return 1 ;
    }else if(a.salario < b.salario){
        return - 1 ;
    }else {
        return 0 ; 
    }
})


console.log(rico)
console.log(rico[0].nome + ' ' + rico[4].salario)




*/


//aula 25 -- Iteração de array 

let frutas = ['banana' , 'laranja' , 'maça' , 'pera' , 'uva']



//let bigfrutas = frutas.filter((item) =>{
  //  if(item.length > 4){
    //    return true ; 
    //}else{
      //  return false ; 
    //}

    //ou 

    /* 
       return  item.lenght > 4
    */
//})

//console.log(bigfrutas);




 //let ok = frutas.some/* every */((value) =>{
   // if(value.length > 3){

     //   return true ;

    //}else{

      //  return false ; 

    //}
//})




//if(ok){
  //  console.log('todos sao maior que tres');
//}else{
  //  console.log('nao sao todos maior do que tres ')
//}


// a tag includes eu vou usar bastab=nte 

/* 

if(frutas.includes('uva')){
    console.log("Tem uva sim !!");
}else{
    console.log('Ops, Não tem fruta !! ')
}

*/



let usuarios = ['isaac' , 'pedro', 'bernado', 'lucas', 'henrique']



if(usuarios.includes('semem')){
    console.log('esse usuario está cadastrado !!') ;

}else{
    console.log('Esse usuario não estar cadastrado ')
}






