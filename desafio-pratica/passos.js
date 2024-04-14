document.querySelector(".button").addEventListener("click",()=>{

    let inico = document.getElementById('inicio') ; 
    let fim = document.getElementById("fim") ; 
    let passos = document.getElementById("passo") ; 
    let res = document.querySelector('.res') ;

    res.innerHTML = ""
   
   
  

   
   if(inico.value.length === 0 || fim.value.length === 0 || passos.value.length === 0 ){

        alert("verifique os dados ")
   }else{

    let p = Number(passos.value)
    let ini = Number(inico.value)
    let f = Number(fim.value)
   
    if(ini < f){
        //conjtage crescente 
        for(let c = ini ; c <= f ; c+= p ){//o contador esta adicionando passos 

        
       
            res.innerHTML += ` ${c} \u{1F603} `
           
        }
    
    


    }else{

        // contagem regressiva 
        for(let c = ini ; c >= f ; c-= p ){//o contador esta adicionando passos 

        
       
            res.innerHTML += ` ${c} \u{1F603} `
           
        }

        res.innerHTML += `\u{1F3C1}`
    }
  
   
  
   }
       
})