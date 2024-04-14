  
function carregar(){


    let data = 22


    
 let area = document.querySelector('.area')
 let txt = document.querySelector(".texto")
 txt.innerHTML = `` ; 


 let img = document.createElement('img')


 if(data >= 0 && data <=12){
   
        txt.innerHTML = `agora são ${data} horas`
        document.body.style.backgroundColor = 'orange'

         img.setAttribute('src','manha.png') ;
         
         

 }else if(data >= 12 && data  <18){

    txt.innerHTML = `agora são ${data} horas`
    document.body.style.backgroundColor = 'red'

     img.setAttribute('src','tarde.png') ; 


 }else{

    txt.innerHTML = `agora são ${data} horas`
    document.body.style.backgroundColor = 'gray'

     img.setAttribute('src','noite.png') ; 
 }



 area.appendChild(img)


}

carregar()


