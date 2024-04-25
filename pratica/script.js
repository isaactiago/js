//dados 

const c = (el) =>{
    return document.querySelector
} 

const cs = (el)=>{
    return document.querySelector
}
 


//eventos 

//funcções

//1 coisa, que eu tenho que fazer é mapear 

pizzaJson.map((item,index)=>{

    let pizzaItem = document.querySelector(".models .pizza-item").cloneNode(true) ; //clono o item
    document.querySelector('.pizza-area').append(pizzaItem) ; //adiciono o item clonado a area que eu quero 

    //informações pra aparecer na tela 
    pizzaItem.querySelector('.pizza-item--img img').src = item.img ;
    pizzaItem.querySelector('.pizza-item--price').innerHTML = `R$${item.price.toFixed(2)}`
    pizzaItem.querySelector(".pizza-item--name").innerHTML = item.name ; 
    pizzaItem.querySelector('.pizza-item--desc').innerHTML = item.description

    //eventos de quando eu clicar no produto : 
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{

        e.preventDefault() ;

        //agora é abrir o quadro 
        //c('.pizzaWindowArea').style.opsite = 0
        c('.pizzaWindowArea').style.display = 'flex' ; 
        
    })

    
    


   
})



    


