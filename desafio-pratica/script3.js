

document.querySelector('.button').addEventListener('click',()=>{

    let res = prompt('Digite uma temperatura em C(celcius)') ; 

    
    let area = document.querySelector('.area') ; 

    area.innerHTML = ' '

   let k = res + 273 

   let f = (res * 1.8) + 32 ;

   let h1 = document.createElement('h1') ;
   let p = document.createElement('p') ;

   h1.innerHTML = `A temperatura de ${res}C, corresponde a ... `
    p.innerHTML = 
    `
        ${k}K (kelvim) ; <br> 
        ${f}F (fahrenheit)

    
    `
   area.appendChild(h1);
   area.appendChild(p);
})