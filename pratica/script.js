/* 

function clicar(){
    alert("sdjck")

    const h1 = document.querySelector("h1") ; 

    h1.style.color = "green" ;
}

let botao = document.querySelector(".buttom") ;

botao.addEventListener("click" , function (){
    
    botao.innerHTML = "oi"
    clicar()
    

})


let h2 = document.querySelector(".topico"); 

h2.innerHTML += "<br> outro ai "


*/



document.querySelector(".button") ; 


function clicar(){

    let teste = document.querySelector(".teste2")

    const h1 = document.querySelector("h1") ; 

    for(let x = 0 ; x < 5 ; x++){
        let newh3 = document.createElement("h3")
        newh3.innerHTML = " adcionado" ; 
        h1.after(newh3)
    }
   

    

    const ul = document.querySelector(".ul")

    let newul = document.createElement("ul")

    for(let i = 0 ; i < 5 ; i++){

        let newli = document.createElement("li") ; 

        newli.innerHTML = " titan 160 " + i ; 

        newul.append(newli)
    }

    ul.after(newul)
}

