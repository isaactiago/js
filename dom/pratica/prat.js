//seleceionando 

const lista = document.querySelector('ul');

const input = document.querySelector('input');


//função 

function soltar(e){
    if(e.key === 'Enter'){
        //criando o li 

        const newli = document.createElement('li') ;

        newli.innerHTML = input.value ;
        
        lista.appendChild(newli)

        // apagando o texto 

        input.value = ' ' ;
    }
}


// snjsjs 

input.addEventListener('keyup',soltar)




const button = document.querySelector('.button');

const body = document.querySelector('body') ;

const dark = document.querySelector('.dark'); 

const light = document.querySelector('.light');

function clicar(){
  if(body.classList.contains('dark')){
    body.classList.replace('dark','light');

    body.style.backgroundColor = 'black'

  }else {

    body.classList.replace('light','dark');

    body.style.backgroundColor = 'white' ; 
  }
}



//elemenyos 
const senha = document.querySelector('.senha') ;

const checkbox = document.querySelector('.checbox')

const span = document.querySelector('span');

//funções
function mostrarSenha(){

  

    if(senha.getAttribute('type') === 'password'){
        senha.setAttribute('type','text')
        span.innerHTML = 'Ocultar senha' ;

    }else{
        senha.setAttribute('type','password')
        span.innerHTML = 'Mostrar senha' ;
    }

}


const img = document.querySelector('img');

function foto(){

    if(img.getAttribute('src') === '../myfotolight.png'){
        img.setAttribute('src','../myfoto.png')
    }else{
        img.setAttribute('src','../myfotolight.png')
    }
}






