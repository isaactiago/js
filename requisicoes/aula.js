//Síncriono = A ordem de execução, uma coisa espera a outra.ou seja , executa uma linha , espera ela termina depois execulta outra linha . 

//ex : 

/* 

let nome = 'isaac'
let sobrenoime = 'ssdsdsdsd'

let concecompleto = nome + sobrenome 


*/
//Assíncrono = é quando a gente esta  executando algo que nao vai espera o outro.O codigo pode ser executado ao mesmo tempo .



//aula 3 -- Como a Web funciona (Req e Resp)? 


/* 

requisição = acessar alguma coisa . 

Request = requisição 

uma requisição sempre vai ter : 

-> cabeçaçho/headers é aonde tem as informações principais 

-> corpo / body nao vai mandar nada

response = resposta

-> Cabaçalhos / Headers coisas que o servido quer mandar pra mim

-> corpo / Body tem algum conteudo 





*/


//aula 4 como funciona uma APi 


/* 
o que é uma api ? 

API significa apllication Progaming interface. 

Uma api nada mais é do que uma forma que a gente convecionou  de fazer uma comunicação entre um software e outro software . 

JSON = padrao da comunicao entre uma API


https://jsonplaceholder.typicode.com/
https://jsonplaceholder.typicode.com/posts

https://jsonplaceholder.typicode.com/users


*/

//aula 5 -- O que é um Callback?

/* 
o que é um CALLBACK ? 

callback = ligar de volta.

o CALLBACK nada mais é do que uma função que eu passo para alguem para ela execulta na hora que ela/eu quiser. Uma função para ser execultada no futuro 

é um conceito que se aplica a eventos de click, de teclado a requisições.

*/


/* 

function callback (){
    alert("djskd")

}

document.querySelector('.button').addEventListener('click', callback)




*/

//Elxplicaçao atraves de portugol para fazer uma requisiução quando clicar no botao 


/* 

Funçãozinha para quanado vlicar no botão 
-requisção a url x 

- ta aqui o callback para quando voce tiver a resposta : 
--callback 

*/


//aula 6 -- Fazendo uma requisição na prática 


//https://jsonplaceholder.typicode.com/posts 


/* 

function clicou () {
    
    fetch('https://jsonplaceholder.typicode.com/posts ')
    .then((response) => { //resposta/callback da requisição
       // console.log(response.body)

       return response.json() ; //esse codigo vai transforma a resposta em objeto 
    })
    .then((json) =>{
        alert(`Titulo do primeiro POST : ${json[0].title}`)
    }) 


}

document.querySelector('.button').addEventListener('click', clicou)

*/

//aula 7 -- Como ver as requisições acontecendo

/* 
e so ir no devetools e ir em network 
*/


//aula 8 --  Entendendo Promise


// Promisse = Promessa 
/* 

toda função fetch retorna pra mim uma promessa. 

o promise é um objeto que fala que a resposta final vai ser no futuro.

tudo que tem um promise é assincrona. 

assincrona nao depende do outro 

*/



/* 

function clicou () {
    
    fetch('https://jsonplaceholder.typicode.com/posts ')
    .then((response) => { //resposta/callback da requisição
       // console.log(response.body)

       return response.json() ; //esse codigo vai transforma a resposta em objeto 
    })
    .then((json) =>{
        alert(`Titulo do primeiro POST : ${json[0].title}`)
    }) 

    alert('dsdkadsa')


}

document.querySelector('.button').addEventListener('click', clicou)



*/


//aula 9 -- Gerenciando erros na Promise

/* 


function clicou(){

    fetch('https://jsonplaceholder.typicode.com/posts ')
        .then((response) => { 


         return response.json() ; 
    })
        .then((json) =>{
            alert(`Titulo do primeiro POST : ${json[0].title}`)
    }).catch((error)=>{
             //console.log('deu rueim')
            // console.log(error)
            alert('deu problema na requisição ')
    }).finally(() =>{
        alert('opa, acabou tudo')
    }) 



}


document.querySelector('.button').addEventListener('click',clicou)


*/


//AULA 10 -- Tipos de status de uma requisição

/* 

Os códigos de status de resposta HTTP indicam se uma solicitação HTTP específica foi concluída com êxito. As respostas são agrupadas em cinco classes:

Respostas Informativas (100 – 199)
Respostas bem-sucedidas (200 – 299)
Mensagens de redirecionamento (300 – 399)
Respostas de erro do cliente (400 – 499)
Respostas de erro do servidor (500 – 599)


*/


/* 

function clicou(){

    fetch('https://jsonplaceholder.typicode.com/po2sts ')
        .then((response) => { 

            console.log(`STATUS ; ${response.status}`) //vai retorna o status

         return response.json() ; 
    })
        .then((json) =>{
            alert(`Titulo do primeiro POST : ${json[0].title}`)
    })


}


document.querySelector('.button').addEventListener('click',clicou)


*/


//aula 11 -- Métodos de envio de requisição 


/* 
Por padrao vem o metodo Get

GET : pegar informações 

Post : mandando/inserindo informações

put : usado quando quero altera uma informação 

delete : deleta uma informação 

*/

/* 

function inserir(){
    fetch(

            'https://jsonplaceholder.typicode.com/posts',
            
            {
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json'// dizer para o servidor como nos vamos manda esses dados, q no caso vai ser em json 
                } ,
                
                

                body : JSON.stringify({ // função que vai manda um objeto, e ele traduz o objeto em json
                    title: 'title de teste', 
                    body: 'corpo de teste' ,
                    userId : 2 
                })
            }
        
        
        )
        .then((response) =>{
            return response.json() ;
        })
        .then((json)=>{
            console.log(json)
        })
}


document.querySelector('.inserindo').addEventListener('click',inserir)


*/


//aula 12 -- Promises com async/await 


/* 

async function clicou(){

    let response = await  fetch('https://jsonplaceholder.typicode.com/posts ')
    let json = await response.json() ; //transforma a resposta em objeto
    alert(`Titulo do primeiro POST : ${json[0].title}`)
   
    alert('hsdifh')

}


document.querySelector('.button').addEventListener('click',clicou)



 async  function inserir(){
    let response = await fetch(

            'https://jsonplaceholder.typicode.com/posts',
            
            {
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json'// dizer para o servidor como nos vamos manda esses dados, q no caso vai ser em json 
                } ,
                
                

                body : JSON.stringify({ // função que vai manda um objeto, e ele traduz o objeto em json
                    title: 'title de teste', 
                    body: 'corpo de teste' ,
                    userId : 2 
                })
            }
        
        
        )
        
        let json = await response.json() ; //transforma a resposta em objeto

        console.log(json)
}


document.querySelector('.inserindo').addEventListener('click',inserir)





*/




