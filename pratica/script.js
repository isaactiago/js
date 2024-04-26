//dados 


let modalQt = 1 ; //variavel que armazenara a quantidade de pizza que tu vai querer 

const c = (el) =>{
    return document.querySelector(el)
} 

const cs = (el)=>{
    return document.querySelectorAll(el)
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

    //O index eu preciso bota em algun lugar na minha div de pizza, pois com ele eu identifico qual é a pizza
    pizzaItem.setAttribute('data-key', index)

    //eventos de quando eu clicar no produto : 
    pizzaItem.querySelector('a').addEventListener('click', (e)=>{

        e.preventDefault() ;

        //agora é abrir o quadro 
        document.querySelector('.pizzaWindowArea').style.opacity = 0 ;
        document.querySelector('.pizzaWindowArea').style.display = 'flex' ; 
        setTimeout(()=>{
            document.querySelector('.pizzaWindowArea').style.opacity = 1 ;
        },200)


        //faznedo a identificação de qual pizza eu vou ta clicando 
        //so que eu tenho que sair de a, pois eu quero é a .pizza-item
        //closest = significa, ache o elemneto mais proximo, ou seja, ele volta para tras  um elemento . 
        let key = e.target.closest(".pizza-item").getAttribute('data-key') ;

        c('.pizzaBig img').src = pizzaJson[key].img
        c(".pizzaInfo h1").innerHTML = pizzaJson[key].name;
        c(".pizzaInfo--desc").innerHTML = pizzaJson[key].description ;
        c(".pizzaInfo--actualPrice").innerHTML = `R$${pizzaJson[key].price.toFixed(2)}`


        
    

        
    })

  


    
    


   
})

// evento dos modals

//fecha o qadrado 

function closeModal(){

   

        document.querySelector('.pizzaWindowArea').style.opacity = 0 ;
        setTimeout(()=>{
            document.querySelector('.pizzaWindowArea').style.display = 'none';
        },500)
}

cs(".pizzaInfo--cancelButton , .pizzaInfo--cancelMobileButton").forEach((item) => {
     item.addEventListener("click", closeModal)
});

  


   


