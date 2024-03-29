/* alert("ola mundo")  */

/* console.log("ola mundo 3.0"); */


// aula 2 -variaveis

/* 
    let nome = "isaac ";

    let idade = 18 ; 

    console.log(nome)
    console.log(idade)


    let cidade = "Pinheiros"
    let estado = "Espirito Santo"

    console.log(cidade)

    console.log(estado)
*/


//aula 3 -- tipos de dados

/* 
let nome = "isaac "; string

let idade = 18 ; number

let logado = true ; booleam


let lista = ["massa" , "ovo", "corante"] Array

let nomeCompleto = {nome:"isaac" , idade:90} object

console.log(typeof nome ) > voce sabera o tipo da variavel 

*/


//aula 4 --let, const, var

/* 

let = cria uma variavel
var  = cria uma variavel

const = cria uma variavel constante(algo que nao para/nao muda)ou seja, valor unico . 

*/

// aula 5  --Operações em variaveis 

/* 

let x = 10 ;

x = x + 2 ;
console.log(x) ;


let nome = "isaac"; 

let sobrenome = "wandermurem";

let nomeCompleto = nome + ' ' + sobrenome ; 

console.log(nomeCompleto);

let n1 = 10; 

let n2 = 5 ; 

let n3 = 10 ; 

let res = (n1 +n3)  *n2 ;

console.log(res) ;


*/


// aula 6 --String e tamplate string

/* 

let nome = "isaac";

let sobrenome = "wandermuirem";

//let nomeCompleto = nome + ' ' + sobrenome ;

let nomeCompleto = ` ${nome} tiago ${sobrenome} ` 

console.log("Nome : " + nomeCompleto)


let idade = 21 ;

let idadeString = ` duda tem  ${idade} anos`

console.log(idadeString)


*/


// aula7 --Condicional if / else

/* 

    let idade = 90 ; 

    if(idade >= 18){
        console.log("maior de idade");
    }else {
        console.log("menor de idade");
    }

// < menor
// > maior
// <= menor ighual
// >=
// != diferente


*/

// aula 8 --condicional == e ===

/* 

let idade = 20 ;

if(idade === 20){
     idade = idade + 10 ;
    console.log("isso ai !!")
    console.log("deu certo agora !!")
    console.log("usar sempre o ===")
    console.log(idade)
}

// "==" significa “igual” porem não testa se a variável possui o mesmo tipo.


// "===" irá testar se a variável é idêntica (mesmo tipo).

*/

//aula 7 --Multi-condicionais (&& e ||)

 


/*

let idade = 18 ; 


if(idade >= 18){

    if(idade < 60){
        console.log("vc é aulto")
    }

}


if(idade >= 18 && idade < 60){
    console.log("vc é um aulto ");
}


*/

//aula 8 condicional dupla(if else)

/* 

let idade = 14 ;

if(idade >= 18 && idade <= 59){
    console.log("adulto");
}else if(idade >=60){
    console.log("idoso");
} else{
    console.log("criança")
}
*/


//aula 9 --condicional ternário 

/* 

//let isMenber = false ;

//let shipping = isMenber ? 2 : 10;

//console.log(isMenber ? 'vc é menbro' : 'vc nao é menbro')
//console.log("Frete : " + shipping)

let age = 90 ; 

let adulto = (( age >= 18 && age <=60 ) ? 'adulto' : 'criamça')

console.log(adulto );




*/


// aula 10 --switch 

/* 

let profession = "joagado" ;

console.log("Profissao: " + profession)

switch(profession){

    case 'fiscal':
        console.log("camisa vede");
    break;

    case 'policial': 
        console.log("camisa preta");
    break;

    case 'bombeiro': 
        console.log("vermelha");
    break;

    default:
        console.log("sua camisa sera azul ")
    break
}


*/

/* 
let letra = "p";



if(letra === "a" || letra === "e" || letra === "i" || letra === "o" || letra === "u"){

    console.log("é uma vogal");

}else{
    console.log("é um consoante")
}
 */



/* 

let n1 = 1 ;

let n2 = 4 ;

if(n1 > n2){
    console.log(" o numero " + n1 + " é maior que o numero " + n2)
}else{
    console.log(" o numero " + n1 + " é menor que o numero " + n2)
}
   

*/


/* let valorCompra = 5 ;

console.log("Valor da compra : " + valorCompra)
if(valorCompra >= 100){
    console.log("Seu desconto é de 10%");
}else if(valorCompra >= 50 && valorCompra <= 99){
    console.log("Seu desconto é de 5%");
}else{
    console.log("ops !!! , você nao tem desconto")
}
 */





    

