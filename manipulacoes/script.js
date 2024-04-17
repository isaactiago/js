// aula 1 -- Métodos de String (1/3)

//let nome = 'isaac tiago wandermuerem '


//let res  = ' ' ;

//if(nome.indexOf('isaac') > -1 ){
    // console.log("Tem sim ")
//}else {
  //  console.log('nao tem ')
//}


//let resultado = nome.indexOf('tiago')// vai retorna pra mim a posição que o texto q a gente digitar/esse texto começa. e se ele nao acha retorna -1 .

//console.log(resultado)


//nome.length 


//console.log(resultado)


//console.log(nome.length) //  vai deizer qunatos caracteres vai ter na variavel nome 




//aula 2 --  Métodos de String (2/3)

//let nome = 'isaac tiagok wansdermeurm '




//let res = nome.substring() //igual o slice.So q ele nao funciona de tras para frente 

//let res = nome.slice(10,20)  // ele vai pega o pedaço da string da onde vc quer que comesse ate aonde voce quer que termine . SE voce bota um numero negativo ele começa do ultimo 

//console.log(res)


// aula 3  -- Métodos de String (3/3) 

//let nome = 'isaac gdfgdfg gfdgdf' ; 

//let numero = '1,2,3,4,5,6,7,8,9,10'

//let res = numero.split(',')


//let res = nome.split(' ') //transforma string em array 

//let res = nome.charAt(3) ; //qual caractere que vai tar na posição que vc quiser 
//let res  = nome.trim() //vai tirar os espaços vazios de um string 


//let res = nome.toUpperCase() // vai transforma tudo em maiusculo 

//toLoweCase = tudo minusculo 

//let res = nome.replace('tiago','souza')//vai troca uma coisa que esta, por outra que eu digita  ; 

//console.log(res)


// aula 4 -- Métodos de Numbers 


//let n = '25' ; 




//let res = parseInt(n) + 5 //vai transforma uma string em um numero 

//parsfloat()  = vai preservar os numerosa decimais 

//let res = n.toFixed(2)//quantos numeros eu vou querer depois do ponto 

//let res = n.toString() ; // vai trasforma um numero em string 




// aula 5 -- Métodos de Arrays (1/4) 


//let lista = ['ovo','farinha', 'corante', 'massa '] ; 

//let res = lista.toString() //transforma o array em uma string  ;

//let res = lista.join('-') //  junta o array em uma string separado por aquilo que voce determina   

//let res = lista.indexOf('') // vai me dizer a posição do item que eu quiser 


//lista.push('prato ') //adiciona um item ao meu array 



//let res  = lista

//console.log(res) ;


//aula 6 --  Métodos de Arrays (2/4) 


//let lista = ['ovo','farinha', 'corante', 'massa '] ; 

//let lista2 = ['prato', 'lidificador','forno']

//lista.splice(1,1)  // vai remover um coisa do meu array. precisa de 2 parametros, q é a posição e a quantidade 



//let res = lista.concat(lista2) // vai junta 2  arrays ; 

//console.log(res) ;


//aula 7 -- Métodos de Arrays (3/4)


//let lista = [45,4,9,16,25] ; 

//let lista2 = [] ;

//lista2 = lista.map(function(item){ // mapea o array e executa uma função 

 //   return item * 2 ; 

//})

//lista2 = lista.filter(function(item){

  //  if(item < 20){ // aqui estou filtrando os numeros que sao menores que 20
     // return true 
  //  }else {
  //    return false ;
  //  }  
//})  //vai rodar uma função e vai retorna true / false



//lista2 = lista.every(function(item){ //retorna true / false

  //return (item > 3) ? true : false ;
//})

//let res = lista2 ; 




//console.log(res)




// aula 8 -- Métodos de Arrays (4/4)

//let lista = [45,4,9,16,25] ;

//let lista2 = [] ;

//lista2 = lista.find(function(item){ // vai procura alguma coisa nesse array 

  //if(item === 16){
    //return true 
  //}
//}) 

//let res = lista2 ; 

//console.log(res)


/* 
let lista = [

  {id : 1 , nome: 'isaac ' , sobrenome : 'wandemremurem'} ,
  {id : 2 , nome: 'tiago ' , sobrenome : 'gggg'} ,
  {id : 3 , nome: 'sasa ' , sobrenome : 'tttt'} ,
  {id : 4 , nome: 'elio ' , sobrenome : 'cccc'} ,
  {id : 5 , nome: 'betec ' , sobrenome : 'rrr'} ,
  {id : 6 , nome: 'ifsdfsd ' , sobrenome : 'wfsdfsd'} ,

]


let pessoa = lista.find(function(item){
  return (item.id === 1) ? true : false  ;
})

let res = pessoa ; 

console.log(res)



*/


//praticando 

//pensa como posso filtrar por nomes ou algo 

/* 
const lista = [1,2,3,5] ; 

let res = lista.filter(function(item){
   if(item > 2 ){
    return true 
   }else {
    return false
   }
})

lista.push('feijhao' , 'pao ', 'alho ' , 'quiabo')

lista.splice(0,1)


console.log(res)


*/



// aula 9 -- Datas (1/3)

//dentro do date eu posso botar 7 parametros :

/* 
  1 ano 
  2 mes = começa do zero o mes 
  3 dia 
  4 hora 
  5 minutos 
  6 segundos 
  7 milesimos 

*/

//let d = new Date() ;  // vai acessa a data/mes/ano/dia atual 

//console.log(d.toDateString()) //função quer vai resumi a data 

//toUTCstring = função q é a data da europa



// aula 10 -- Datas (2/3)

//let d = new Date() ; 

//let novoValor = d.getFullYear() // vai retorna so o ano  ;

// d.getMonth() : pega o mes 

// d.getDay(): pega o dia em numero que vai de 0 a 6 ; 
// d.getDate(): pega o dia atual  ; 

//d.getHours() : pega as horas 

//get.Minutes() : pega os minutos 
//get.Seconds() : pega os segundos 

//let res = novoValor

//console.log(novoValor)




// aula 11 -- Datas (3/3)

 //let d = new Date() ;

 //d.setFullYear(1999) // trocar o ano 

 //d.setDate(d.getDate() + 5 ) ; // vai pegar o dia e vai  almenta 5 vezes 

 // setMonth(11) : troca o mes 

 //setDate(15) : troca o dia 
 

 //let novoValor = d ; 

 //console.log(novoValor) ;


 // aula 12 -- Matematica  

 //let novoValor = Math.PI ; // moatrA O VALOR  de PI . 
 
 
 //let novoValor = Math.floor(Math.random() * 100) // vai retorna um numero aleatorio entre 0 e 100. mas o random sozinho retorna de 0 a 1 .
 
 // Math.min(7,100,200,20,3) // se manda varios numeros e ele vai dizer qual é o menor 

//math.max() = é o inverso do min 
 
 // Math.round(3.70) ; //aredonda o numero  

 //Math.floor()  //vai sempre arredonda para baixo 
 //Math.ceil()  //vai sempre arredonda para cima 

 //Math.abs = se vai saber o numero absoluto 

 //console.log(novoValor) ;




 
 //aula 13 -- Intervalos( 1/2) 

 //let timer ;

 //function comecar(){

  // timer = setInterval(showtime , 1000)  // manda a função que quer que execute, depois o intervalo de tempo

  //1000 = 1 segundo 


 //}

 /* 

 

  function parar(){

    clearInterval(timer)  //limpa o intervalo 



  }

 function showtime(){

  let d = new Date() ; 

  let h = d.getHours() ;

  let m = d.getMinutes() ;

  let s = d.getSeconds(); 

  let txt = h + ' : ' + m + ' : ' + s ;

  document.querySelector('.demo').innerHTML = txt ;

}
 
 */




// agora que criamos a funçãop para pegar a hora minutos e segundos atual 


// vamos criar um time para roda de x e, x secundos




// aula 14 Intervalos (2/2)


/* 

let timer ;


function rodar(){

  timer = setTimeout(function(){ //voce passa uma função / depois o tempo 
    document.querySelector('.demo').innerHTML = ' rodou ! '
  } , 2000) ; 
  

}


function parar(){
  clearTimeout(timer)
}


*/



//aula 16v -- Descontruindo Objetos (1/2)


/* 
let pessoa = {

  nome: 'isaac' ,
  sobrenome : 'wandermre' ,
  idade : 18 ,
  social : {
    facebook : 'wsddas' , 
    instagram : 'dsadas' ,
  },

  nomeCompleto : function(){
    return `${this.nome} ${this.sobrenome}`
  }
}

let {nome,idade = 0 ,sobrenome,} = pessoa ; //eu botei um  valor padrao na idade quaso nao tenha uma idade em cima 

console.log(nome,sobrenome,idade)


*/



// aula 17 -- Descontruindo Objetos (2/2)

/* 

let pessoa = {

  nome:'isaac' ,
  sobrenome : 'wandermuerem' , 
  idade : 18, 

  social : {
    istagram : {

        url :  '@isaactwzim' ,
        seguidores : '10.000'

    } 
  
  } ,

 
}

*/


//let {facebook, istagram} = pessoa.social  ou 

//let{ nome , idade , social:{istagram}} = pessoa

//let {url,seguidores} = pessoa.social.istagram


//let{nome, idade , social:{istagram : {url:istagram, seguidores}}} = pessoa


//console.log(nome,idade,istagram,seguidores) ;

/* 
function pegarNomeCompleto({nome,sobrenome,social:{istagram :{url:istagram}}}){ //desconstruindo em funções
 // return obj.nome + ' ' +obj.sobrenome ;

  return `${nome} ${sobrenome} siga em : ${istagram} `
}


console.log(pegarNomeCompleto(pessoa))


*/


// aula 18 -- Descontruindo Arrays 


//let info = ['isaac wandermurem', ' isaac' , 'wandermurem', '@isaactwzim'] ;

//let [nomeCompleto, nome,sobrenome, istagram] = info //na hora de descontreuir eu precisso dar um nome 

//console.log(nomeCompleto, nome, sobrenome, istagram)


//let [nomeCompleto,  , ,  istagram] = info ; 

//console.log(nomeCompleto, istagram)


/* 

function criar(){
  let a = [1,2,3] ;

  return a
}

let [a,b,c] = criar() ;


console.log(a,b,c)


*/


//aula 20 operador Spread 


/* 
let numeros = [1,2,3,4] ; 

let outros = [...numeros , 5,6,7,8] ; //vai junsta arrays 

console.log(outros)




*/

/* 

let info = {
  nome : 'isaac' ,
  sobrenome : 'wander' ,
  idade : 18 ,
}


let novainfo = {
  ...info , 

  cidade : 'pinheiros' ,
  estado : 'ES' ,
  pais : 'brasil ' , 
}



console.log(novainfo)


*/

/* 

function adicionaInfo(info){

  let novaInfo = {
    ...info ,

    data_cadastro : 22 ,
    tokken : 'dsfs' , 
    senha : 123 ,
  }

  return novaInfo


}

console.log(adicionaInfo({nome:'isaac' , sobrenome : 'wandermurem'})) ;




*/






//aula 21  -- Operador Reset

/* 
function adicionar(...numeros){
  console.log(numeros)
}

adicionar(1,2,3,4,5,6,7,8,9,0)


*/





//aula 22 includes e Repeat 


/* 

let lista = ['ovo', 'cafe', 'arroz', 'fdeijao' , 'macarrao'] ;

//console.log(lista.includes('ovo')) // o includes vai retorna true ou false 
//se usa o includes pra saber se algo existe no seu array ou outra coisa

const nome = 'isaac'
console.log(nome.repeat(100)) //repete algo quantas vezes voce quiser 

*/



// aula 23 -- Objeto: Key, Values e Entries

/* 

let lista = ['ovo', 'macarrao', 'feijao', 'pipoca']

console.log(Object.entries(lista)) 


///keys = retorna a chave '


*/



//aula 24 -- String, padStart, padEnd 


//let tel = '5' ; 

//console.log(tel.padEnd(9, '*')) //vai preecnher a string até chegar no minimo

//padstart = vai preencher no inicio

/* 

let cartao = '1234123412341234'
 
let lastdigitos = cartao.slice(-4)

let cartaoMascarado = lastdigitos.padStart(16, '*')



console.log('Este é o seu cartao ? ' + cartaoMascarado)




*/





 

