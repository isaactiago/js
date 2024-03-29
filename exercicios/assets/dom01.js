
//ELEMENTOS 
const input = document.querySelector('input') ;

const lista = document.querySelector('ul')



//FUNÇÕES 

function  handleKeyUp(e){

    if(e.key === 'Enter'){
      
            //adiciona elemento li na lista
             const newli = document.createElement('li');

             newli.innerHTML  = input.value ;

             lista.appendChild(newli)

             //limpa o campo de texto 

             input.value = ' ' ;
    }


    

   


}


//EVENTOS 

input.addEventListener('keyup', handleKeyUp)






