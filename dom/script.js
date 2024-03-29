//aula 1 -- O que é dom 

// DOM = significa Document Object Model.É como se fosse uma arvore que tem uma memoria e armazena tudo dentro do meu html, e atraves dessa memoria podemos manipula a oagina do nosso site. 

//aula 2 -- Selecionando elementos 1


//document.getElementsByTagName("h1")  // aui estamos pegando os elementos pelo nome da tag(h1...) 

//isso vai me retornar um array 


// //aula 3 -- Selecionando elementos 2

//document.getElementById("teste")  //seleciona pelo id do elemento

//document.getElementsByClassName("buttom") // seleciona pela classe do elemento

//document.querySelector("#teste") // essa TAG ELA É ABERTA,ou seja, seleciona como se fosse no css

//document.querySelector(".buttom") // essa TAG ELA É ABERTA,ou seja, seleciona como se fosse no css

//document.querySelector(" li ") //

//ducument.querySelectorAll( " #teste ul li  ") // posso entra em camadas


// aula 3 -- Eventos de click 


/* 
function clicou(){
    //alert("clicou papai ")
    console.log("clicoou papi ")
}
*/

/* 
function clicou(){
    alert("clicou papi ")
}

let botao = document.querySelector('.buttom');

botao.addEventListener("click" , function(){
    clicou()
});


*/


// aula 4  -- Manipulando elementos 1 

/* 

*/

//function clicou(){
  //  const teste = document.querySelector("#teste") ;

    //const ul = teste.querySelector('ul')

    //ul.children[0].innerHTML = "item alteradoooo" ;
   
    //ul.innerHTML += "<li>item alterado</li>" // esse += vai adiciona mais um  li
   // console.log(teste.children)
  // console.log(teste.children[0].children)
//}


// aula 5 -- Manipulando elementos 2


/* 

function clicou(){
    const teste = document.querySelector("#teste");

    const ul = document.querySelector("ul");

    //ul.children[0].append('alterado'); //aciciona mais um texto

    let newli = document.createElement("li")

    newli.innerText = "Item adicionado"

    //ul.appendChild(newli) // esse appendchild adiciona mais um elemento

    ul.prepend(newli) ; //adiciona so que no começo. mesma coisa do appwn/child e append





}

*/



// aula 6 -- Manipulando elementos 3

/* 


document.querySelector("button")

function clicou(){
    const teste = document.querySelector("#teste");

    const ul = document.querySelector('ul') ; 

    //const newbuttom = document.createElement("button")

    //newbuttom.innerText = "click" ;

    //ul.after(newbuttom);

    let newlist = document.createElement("ul")

    for(let i = 0 ; i < 10 ; i++){

        let newli = document.createElement("li")
        newli.innerHTML =   ' adicionado !! hello world' + i ;  
        newlist.append(newli); 
    }

    ul.after(newlist)

}


*/

// aula 7 -- Manipulando atributos

/* 

function clicou() {

  

    const input = document.querySelector("input") ; 

   // console.log(input.getAttribute( 'type')) ;



   //if(input.hasAttribute('placeholder')){
     //   console.log("tem placeholder");
   //}else{
    //console.log("Não tem placeholder");
   //}

   //input.setAttribute('placeholder' , 'placeholder trocado ')


   const button = document.querySelector('.button') ; 

  

   
   if(input.getAttribute('type') === 'text'){

        input.setAttribute('type' ,'password');
        button.innerHTML = ' mostrar senha ' ; 

    }else{
       
        input.setAttribute('type' ,'text');
        button.innerHTML = 'ocultar senha ' ; 
        
    }


}



*/

// aula 7 -- Manipulando o CSS 


/* 

function clicou(){
    const li = document.querySelectorAll('.li'); 

    const button = document.querySelector('.button')
    console.log(li)

 

    for(let i = 0 ; i < li.length ; i++){

        li.style.backgroundColor = "red" ;

        li.style.fontSize = '20px';
    
        li.style.color = 'blue';
   
    }

   // 
    
    

}
   

*/

// aula 10 --  Trabalhando com Classes

/* 

function clicou(){

    const button = document.querySelector('.button')

    //button.classList.add('verde')

    //button.classList.remove('azul ')

    //if(button.classList.contains('azul')){
      //  button.classList.remove('azul'); 
        //button.classList.add('verde') ;
    //}else{

      //  button.classList.remove('verde'); 
        //button.classList.add('azul') ;

    //}

    if(button.classList.contains('azul')){
        button.classList.replace('azul','verde');
    }else{
        button.classList.replace('verde','azul');
    }
}
 

*/


//aula 11 -- Eventos de teclado 1  e 2 

function apertou(){


}


function segurou(){


}


function soltou(even){

   // console.log(even.code)

   console.log(even.shiftkey)

    

}


const input = document.querySelector('input');

input.addEventListener('keyup',soltou)