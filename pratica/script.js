//dados 

let cart = [] //variaval que vai armazena o array 
let modalQt = 1 ; //variavel que armazenara a quantidade de pizza que tu vai querer 

let modalKey = 0 ; // //Variavel qeu vai armazena o key, para eu saber qual pizza que é na hora do que for por carrinho 



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


        //troca de tamanho das pizzas e informa o size 
        c(".pizzaInfo--size.selected").classList.remove('selected')
        cs('.pizzaInfo--size').forEach( (size,sizeIndex)=>{
           
            if(sizeIndex === 2){
                size.classList.add('selected')
            }

            size.querySelector("span").innerHTML = pizzaJson[key].sizes[sizeIndex]
        })


        
        //vai resetar a quantidade quando fechar o modal 
        modalQt = 1 ; 
        c('.pizzaInfo--qt').innerHTML = modalQt



        //Variavel qeu vai armazena o key, para eu saber qual pizza que é na hora do que for por carrinho 
        modalKey = key ; 


        
    

        
    })

  


    
    


   
})

// evento dos modals -------------------------------

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



// evento de quanto clica no mais e menos, adiciona ou dimiunuir a quantidade de pizza

document.querySelector('.pizzaInfo--qtmais').addEventListener('click', ()=>{

    modalQt++ ;
    c('.pizzaInfo--qt').innerHTML = modalQt
    
})


document.querySelector('.pizzaInfo--qtmenos').addEventListener('click', ()=>{

   if(modalQt > 1){

    modalQt-- ;
    c('.pizzaInfo--qt').innerHTML = modalQt
    
   }

})


//troca de tamanho das pizzas e informa o size 
cs('.pizzaInfo--size').forEach( (size,sizeIndex)=>{

    size.addEventListener("click",()=>{
        c(".pizzaInfo--size.selected").classList.remove("selected");
        size.classList.add('selected');
        

    })

})


//eventos do carrinho -----------------------------------------------


c('.pizzaInfo--addButton').addEventListener("click", ()=>{

     // 3 informações obrigatorias para por no carrinho 

     //qual pizza ? = modalKey

     //qual o tamanho ? 

        let size = parseInt(c(".pizzaInfo--size.selected").getAttribute("data-key"))
        console.log(size)

     //Quantas pizzas  = modalQt


     //adiciona ao meu carrinho/array 

     //tenho que criar um identificador 

     let identificador =  pizzaJson[modalKey].id+"@"+size

     //verificar se eu ja tenho aquele item adicionado ao carrinho ; 
     let key = cart.findIndex((item)=>{
        return item.identificador == identificador;
     }) ;

     if(key > -1){

        //se eu achar o item no carrinho eu, so aumento a quantidade ;
        cart[key].qt += modalQt ; 

     }else{

        //se eu nao achar o item no carrinho, eu adiciono 
        cart.push({
            identificador,
            id : pizzaJson[modalKey].id ,
            size,
            qt : modalQt ,
         })
    

     }

     





     
    closeModal() ; 
    updateCart();
    
})


function updateCart(){

    //verirfica se tenho itens no carrinho 
    //se tiver eu abro o carrinho
    if(cart.length > 0){
       c("aside").classList.add("show") ;

       //limpa o carrinho 
       c('.cart').innerHTML = '' ;

       let subtotal = 0 ;
       let desconto = 0 ; 
       let total = 0 ; 

       //agora temos que fazer um looping no carrinho pois, eu vou peagr item a item, pra exibir na tela 

       for(let i in cart){
            //primeiro, é identificar qual é a pizza 
             //usamos o find para procurran no meu pizzaJson, e la dentro eu pego o id da pizza 
            let pizzaItem = pizzaJson.find((item)=>{
                 return item.id == cart[i].id
             })

              //clona o cart--item 

            let cartItem = c(".cart--item").cloneNode(true) ; 

             document.querySelector(".cart").append(cartItem) ; 

            let pizzaSizeName ;

            switch(cart[i].size){
                 case 0 : 
                    pizzaSizeName = 'P'
                 break ;
                 case 1 : 
                      pizzaSizeName = 'M'
                 break;
                case 2 : 
                      pizzaSizeName = 'G'
                break ;
            }

            let pizzaname = `${pizzaItem.name} ${pizzaSizeName}`

            cartItem.querySelector('.cart--item img').src = pizzaItem.img ; 
            cartItem.querySelector(".cart--item-nome").innerHTML = pizzaname ; 
            cartItem.querySelector('.cart--item--qt').innerHTML = modalQt ; 



            
        }

       c(".cart--item").cloneNode(true) ;
    }else{

        c("aside").classList.remove("show")

    }

}



  


   


