
const c = (el) =>{
    return document.querySelector(el)
}





pecasJson.map((item,index)=>{

    let pecasItem = document.querySelector('.models .pecas-item').cloneNode(true) ; 

    document.querySelector(".pecas-area").append(pecasItem) ; 

    pecasItem.querySelector('.pecas-item--img img').src = item.img ;
    pecasItem.querySelector('.pecas-item--name').innerHTML = item.name; 
    pecasItem.querySelector(".pecas-item--price").innerHTML = `R$${item.price}`
    pecasItem.querySelector(".pecas-item--desc").innerHTML = item.description

    pecasItem.querySelector(".pecas-item a").addEventListener('click', (event)=>{
        event.preventDefault() ; 

        let key =  event.target.closest('.pecas-item').getAttribute("data-key") ; 

        console.log(key)

        c(".pecasWindowArea").style.opsite = 0
        setTimeout(()=>{
            c(".pecasWindowArea").style.display = "flex" ;
        },200)
        c(".pecasWindowArea").style.opsite = 1 ; 
    })
   
}) 




c('.pecasInfo--cancelButton').addEventListener("click",()=>{
    c(".pecasWindowArea").style.opsite = 0
    setTimeout(()=>{
        c(".pecasWindowArea").style.display = "none" ;
    },100)
   


})

