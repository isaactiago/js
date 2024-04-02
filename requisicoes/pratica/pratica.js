

/* 
function clicar(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response)=>{
        return response.json() ;
    }).then ((json)=>{
        alert(` Usuaruio : ${json[1].name} - Email :  ${json[1].email}`) ;
    })
}
document.querySelector('.button').addEventListener('click', clicar)


*/


 

/* 

 async  function clicar() {

    let response = await fetch('https://jsonplaceholder.typicode.com/comments')
    let json = await response.json() ;
    alert(json[0].body)

}

document.querySelector('.button').addEventListener('click', clicar)

*/



/* 

function clicar() {

    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) =>{
        return response.json() ;
    }).then((json) => {
        alert(json[4].title)
    })

}


document.querySelector('.button').addEventListener('click', clicar)


*/




/* 

function inserir() {

    fetch(

            'https://jsonplaceholder.typicode.com/posts' ,

            {
                method : 'POST' ,
                headers : {
                    'Content-Type' : 'application/json' // dizer para o servidor como nos vamos manda esses dados, q no caso vai ser em json 
                } ,

                body : JSON.stringify({
                    title: 'alguma coisa bla bla bla',
                    body : 'bla bal bal bla bla abla',
                    userId : 2 , 
                })
            }
        
        ) 
        .then((Response)=>{
            return Response.json()
        })
        .then((json)=>{
            console.log(json)
        })
}


document.querySelector('.inserir').addEventListener('click', inserir)




*/

/* 

async function inserir(){
    let response = await fetch(
        
            'https://jsonplaceholder.typicode.com/posts' ,

            {
                method : 'POST',

                headers : {
                    'Content-Type' : 'application/json'
                } ,

                body : JSON.stringify({
                    title : 'hnsdafdsa',
                    body : 'jdoadjaodjasopdjasopdjasod',
                    userId : 1 ,
                })
            }
        
        
        )
        let json = await response.json()

        console.log(json)
}

document.querySelector('.inserir').addEventListener('click', inserir)



*/











// https://jsonplaceholder.typicode.com/comments


/*




async function Readcomentarios(){

    let comenstsArea = document.querySelector('.comentarios')
    comenstsArea.innerHTML = 'Carregando ...'

   let response = await fetch('https://jsonplaceholder.typicode.com/comments')
   let json = await response.json()

  


   if(json.length > 0){

    comenstsArea.innerHTML = ' ' ;

    for(let i in json ){

       

        const h1 = document.createElement('h1')
        const p = document.createElement('p')
        const hr = document.createElement("hr")

        h1.innerHTML = `${json[i].name}` ;

        p.innerHTML = `${json[i].body}`


        comenstsArea.appendChild(h1)
        comenstsArea.appendChild(p)
        comenstsArea.appendChild(hr)
    }

   }else{

    comenstsArea.innerHTML = ' de erro '
   }


    

}



async function addNewComent(name,body){

    await fetch ( 
        'https://jsonplaceholder.typicode.com/comments' ,

        {
            method: 'POST' , 
            headers : {
                'Content-Type' : 'application/json'
            },

            body : JSON.stringify({
                name , 
                body ,
                userId : 2 ,
            })
        } ,

        document.querySelector('#namefield').value = ' ' ,

        document.querySelector('#bodyfield').value = ' ' ,


        Readcomentarios()

    
    )
}


document.querySelector('#button').addEventListener('click', () =>{

    let name = document.querySelector('#namefield').value ;

    let body = document.querySelector('#bodyfield').value ;

    if(name && body){

        addNewComent(name,body)

    }else {
        alert("Ops, preencha os compos ")
    }

})



Readcomentarios()

*/




// https://jsonplaceholder.typicode.com/users


async function Readusuarios() {


    let usuariosArea = document.querySelector('.usuarios') ; 

    usuariosArea.innerHTML = ' Carregando ... ' ;



    let response = await fetch('https://jsonplaceholder.typicode.com/users') ; 

    let json = await response.json() ; 

    if(json.length > 0){

        usuariosArea.innerHTML = ' '

        for(let i in json ){
            let h1 = document.createElement('h1')
            let p = document.createElement('p') 

            h1.innerHTML = `${json[i].name}`

            p.innerHTML = `${json[i].email}`


            usuariosArea.appendChild(h1)
            usuariosArea.appendChild(p)
        }

    }else{
        usuariosArea.innerHTML = 'ops de errado '
    }

    



}

async function addUsuarios(name,email){

    await fetch(
        'https://jsonplaceholder.typicode.com/users' , 

        {
            method : 'POST' , 

            headers : {
                'Content-Type' : 'application/json'
            } , 

            body : JSON.stringify({
                name , 
                email ,
                userId : 2
            })
        },

        name = document.querySelector('#namefield').value = ' ' ,
        email = document.querySelector('#email').value = ' ' , 

        Readusuarios() ,


    )

}


document.querySelector('#button').addEventListener('click',()=>{
    const name = document.querySelector('#namefield').value ; 
    const email = document.querySelector('#email').value ; 

    if(name && email){

        addUsuarios(name,email) ;
    }else {
        alert('preenecha os campos !!!')
    }

})



document.querySelector('.buttonsenha').addEventListener('click', ()=>{
   let senha =  document.querySelector('.senha');
   const button = document.querySelector('.buttonsenha')

    if(senha.getAttribute('type') === 'password'){
        senha.setAttribute('type','text')
        button.innerHTML = ' oclta senha'
    }else {
        senha.setAttribute('type','password')
        button.innerHTML = 'Mostrar senha'
        
    }
})


Readusuarios()