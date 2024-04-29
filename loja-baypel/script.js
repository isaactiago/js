
let cart = [] ; 
let modalQt = 1 ; 
const c = (el) =>{
    return document.querySelector(el)
}

let modalKey = 0 ; 





pecasJson.map((item,index)=>{

    let pecasItem = document.querySelector('.models .pecas-item').cloneNode(true) ; 
    pecasItem.setAttribute('data-key',index);

    document.querySelector(".pecas-area").append(pecasItem) ; 

    pecasItem.querySelector('.pecas-item--img img').src = item.img ;
    pecasItem.querySelector('.pecas-item--name').innerHTML = item.name; 
    pecasItem.querySelector(".pecas-item--price").innerHTML = `R$${item.price}`
    pecasItem.querySelector(".pecas-item--desc").innerHTML = item.description

    pecasItem.querySelector(".pecas-item a").addEventListener('click', (event)=>{
        event.preventDefault() ; 

        key =  event.target.closest('.pecas-item').getAttribute("data-key") ; 
        modalKey = key ; 
        modalQt = 1 ;
        
       c(".pecasBig img").src = pecasJson[key].img
       c('.pecasInfo h1').innerHTML = pecasJson[key].name
       c(".pecasInfo--desc").innerHTML = pecasJson[key].description
       c('.pecasInfo--actualPrice').innerHTML = `R$${pecasJson[key].price.toFixed(2)}` 

       c('.pecasInfo--qt').innerHTML = modalQt ; 

        

        c(".pecasWindowArea").style.opsite = 0
        setTimeout(()=>{
            c(".pecasWindowArea").style.display = "flex" ;
        },200)
        c(".pecasWindowArea").style.opsite = 1 ; 

       

        
        
        
      
       
        


    })
   
}) 



function closeModal(){

    
        document.querySelector(".pecasWindowArea").style.opsite = 0
        setTimeout(()=>{
            document.querySelector(".pecasWindowArea").style.display = "none" ;
        },100)


}
document.querySelectorAll(".pecasInfo--cancelButton,.pecasInfo--cancelMobileButton").forEach((item) =>{
    item.addEventListener("click", closeModal)
})




c('.pecasInfo--qtmais').addEventListener('click',()=>{
    modalQt++ ; 
    c('.pecasInfo--qt').innerHTML = modalQt

})

c('.pecasInfo--qtmenos').addEventListener('click',()=>{
  
  if(modalQt > 1){
     modalQt-- ;
     c('.pecasInfo--qt').innerHTML = modalQt
  }
   

})



document.querySelector(".pecasInfo--addButton").addEventListener("click", ()=>{

    //qual é a peça 

    let identificador = pecasJson[modalKey].id+'@'+ pecasJson[modalKey].price ;

    let key = cart.findIndex((item)=>{
         return  item.identificador == identificador ; 
    })

    if(key > -1){

         cart[key].qt += modalQt

    }else{

    
      cart.push({
            identificador,
            id : pecasJson[modalKey].id,
            qt : modalQt , 
        })
    }




    closeModal() ; 
    updateCart()
})


function updateCart(){


    if(cart.length > 0){

       
        c('aside').classList.add('show')
        c('.cart').innerHTML = ''; 

        for(let i in cart){

            let pecasItem = pecasJson.find((item)=>{

                return item.id == cart[i].id
    
            })

            let cartItem = c(".cart--item").cloneNode(true) ; 

            cartItem.querySelector(".cart--item img").src = pecasItem.img
            cartItem.querySelector(".cart--item-nome").innerHTML = pecasItem.name
            cartItem.querySelector(".cart--item--qt").innerHTML = cart[i].qt ; 

            cartItem.querySelector(".cart--item-qtmais").addEventListener('click',()=>{
                cart[i].qt++ ; 
                updateCart()

            })
            cartItem.querySelector(".cart--item-qtmenos").addEventListener('click',()=>{
                if(cart[i].qt > 1){

                    cart[i].qt-- ; 
                   
                }else{
                    //removo o carrinho 
                    cart.splice(i,1)
                }
               
                updateCart()

            })



            document.querySelector(".cart").append(cartItem)


        }

    }else{
        c("aside").classList.remove("show") ;
       
    }
}













