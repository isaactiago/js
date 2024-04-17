
/* 

let timer ; 

function iniciar(){

    timer = setInterval(Tempo,1000)
}

function parar(){

    timer = clearInterval(timer)

}


function Tempo(){

    let d = new Date() 

    let hora = d.getHours()
    let minutos = d.getMinutes()
    let segundos = d.getSeconds()

    let txt = `${hora} : ${minutos} : ${segundos}`

    document.querySelector('.tempo').innerHTML = txt ;
}



*/






/* 

let usuarios = ['isaac' , 'abreu', 'tiago'] ; 

let senha = [1,2,3] ;

let email = ['saksnk@gamil.com']

let [a,b,c] = usuarios ;
let [d,e,f] = senha ;

let [email1 , , ] = email


console.log(a,d , email1)
console.log(b,e)
console.log(c,f)


*/



/* 
let usuario = {

    nome : 'isaac'  ,
    sobrenome : 'wandermurem' ,
    senha : 123 , 
    email : 'isaac@gmail.com' ,

    pessoal : {
        rua : 'jdsodjso',
        bairro : 'jundia', 
        numero : 332 ,

    }

}

function nomeCompleto({nome,sobrenome}){

    return `${nome} ${sobrenome}`

}

const {nome,email, pessoal :{rua , numero,bairro}} = usuario

console.log(nomeCompleto(usuario), email, rua, numero,bairro )



*/





let interval ;

function iniciar(){

    interval = setTimeout(function(){
        document.querySelector('.demo').innerHTML = 'Feliz aniversario .... loren'
    },2000)


}

function parar(){

     clearTimeout(interval)
}




