//aula 1 -- introdução a funçoes

// o que é ? 

/* Uma função em programação é como uma receita de cozinha. Ela tem um nome único, recebe ingredientes (parâmetros), realiza passos específicos (corpo da função) e fornece um resultado (valor de retorno) quando é chamada. Funções ajudam a organizar o código, torná-lo reutilizável e mais fácil de entender. */

//aula2 --declarando uma função 


/* function gravidade() {

        console.log(" a gravidade do pçlaneta é : ");
        console.log(9.8)

}
 */

//aula 3 --como usar uma função 

/* function gravidade() {

    console.log(" a gravidade do planeta é : ");
    console.log(9.8);

}


gravidade();
console.log("opa tudo bem ? ")
*/

//aula 4 -- Passando parâmetros em funções


/* 
function  somar(n1,n2){

    let res = n1 + n2 ;
    console.log("resultado " + res);

}

somar(10,5) ;
*/


/* 

function nomeCompleto(nome,sobrenome){

    console.log(`${nome} ${sobrenome}`)

}

nomeCompleto("isaac","wandermurem")
 */
 

//aula 5 -- retorno da função 

//ENTRADA(NOME,SOBRENOME) -> PROCESSAMENTO(DENTRO DA FUNCTION) -> SAIDA


 /* 
 function nomeCompleto(nome,sobrenome){

    return `${nome} ${sobrenome}`;

}

let completo =  nomeCompleto("isaac","wandermurem");
console.log(completo)
*/

//pratica

/*  

function pessoa(nome){
    console.log("Nome : " + nome )
    return
}

function calcdizmo(n1){
    res = n1 * 0.1
    console.log("valor do seu salario : " + n1)
    console.log("dizmo : " + res)
    
}

pessoa("isaac");
calcdizmo(800);

*/

//aula 6 -- Função com retorno condicional

/* function maiorDEIdade(idade){
    if(idade >= 18 && idade <= 60){
        //return 'Maior de idade'
        return true ;
    }else{
       // return 'menor de idade'
       return false ;
    }
}

//console.log(maiorDEIdade(30))
let idade = 40 ;
let verificacao = maiorDEIdade(idade)
//console.log(verificacao)

if(verificacao){
    console.log("maior de idade")
}else{
    console.log("meno de idade")
}
 */


// aula 11 -- Variáveis dentro de funções


/* 
function add(){
  
    let count = 0 ;
    count++;
}

let count = 0 ;

add()
add()

console.log(count)

*/

//aula 12 -- funções dentro de funçôes 



function addSquares(a,b){

   /* Arrow function aqui em baixo  --> */
    const square = (x) => {
        return x * x ;
    }
    
    let sqrA= square(a);
    let sqrB= square(b);
    return sqrA + sqrB ;
}

console.log(addSquares(2,3))