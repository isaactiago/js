// https://jsonplaceholder.typicode.com/posts

async function Readposts () {

    let postArea = document.querySelector('.posts')
    
    postArea.innerHTML = ' carregando ...' 

    let response = await fetch('https://jsonplaceholder.typicode.com/posts')
    let json = await response.json() ; 



    if(json.length > 0 ) {

        postArea.innerHTML = ` ` ;

        for(let i in json){

            let h1 = document.createElement('h1') ;
            let p = document.createElement('p')
            let hr = document.createElement('hr')

            h1.innerHTML = json[i].title

            p.innerHTML = json[i].body

           
            
            postArea.appendChild(h1)

            postArea.appendChild(p)

            postArea.appendChild(hr)

           
        }

        

    } else{
        postArea.innerHTML = '  Nenhum post para exibir'
    }

    

    
}



async function addNewPost (title,body){

     await fetch(
        'https://jsonplaceholder.typicode.com/posts' ,

        {
            method : 'POST',
            headers : {
                'Content-Type' : 'applecation/json'
            } ,

            body : JSON.stringify({
               // title: title ,
               // body : body ,
                 title,
                 body,
                 userId : 2 ,
            })
        }

        

        
    )

     document.querySelector('#titlefield').value = ' '; //esse codigo vai limpa os campos

     document.querySelector('#bodyfield').value  = ' ' ;//esse codigo vai limpa os campos

    Readposts() // vai recarregar os post 

}



document.querySelector('#button').addEventListener("click", () =>{
    let title = document.querySelector('#titlefield').value ; 

    let body = document.querySelector('#bodyfield').value ; 

    if(title && body){ //vai verificar se os campos estao preenchidos 

        //Agora temos que fazer a requisição para adicionar 

        addNewPost(title,body)

    }else{
        alert('Preencha todos os campos ')
    }
})

Readposts()