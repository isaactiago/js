

document.querySelector('.button').addEventListener('click', ()=>{

    let area = document.querySelector('.area');

    area.innerHTML = ''

    let distancia = prompt('Digite uma distancia em metros ')

    let res = distancia.toString()

    //let resposta = `A distancia de ${distancia} metros, corrrespomde a ...`
    //console.log(resposta)

   

    let km =  res / 1000   ; 
    let hm = res / 100 ;
    let dam = res / 10  ; 
    let dm = res * 10 ; 
    let cm = res * 100 ;
    let mm = res/ 1000 ;

   

        



        
        let h1 = document.createElement('h1') ; 

        let p = document.createElement('p') ; 
        

        h1.innerHTML =` A distancia de ${res} metros, corrrespomde a ...`


         p.innerHTML = 
         `
             ${km} quilometros (km) <br>
             ${hm} hectometros (hm) <br>
             ${dam} decqametros (dam) <br>
             ${dm} decimetros (dm) <br>
             ${cm} centimetros (cm) <br>
             ${hm} milimetros (mm) <br>
         `
           

       
  

        area.appendChild(h1)

        area.appendChild(p)
        


   

       
   




   


})