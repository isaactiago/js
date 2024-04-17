
let input = document.getElementById("lista") ; 

let select = document.querySelector('.select')
let res = document.querySelector('.res'); 
let valores = []


function isNumero(n){
    if( Number(n) >= 1 && Number(n) <=100){
        return true 

    }else{
        return false 
    }
}

function inlista(n,l){

    if(l.indexOf(Number(n)) != -1){
        return true 
    } return false 


}

document.querySelector(".button").addEventListener("click",()=>{

   if(isNumero(input.value) && !inlista(input.value,valores)){

    valores.push(Number(input.value))
   
    let option = document.createElement('option') ; 
   
    option.innerHTML = `Valor ${input.value} adicionado a lista `
    select.appendChild(option)
   
    res.innerHTML = " "
    
   }else{
     alert('valor invalido ou ja encontrado na lista ')
   }
})



function finalizar(l,n){

    

    if(valores.length === 0){
        alert('Adicione valores antes de finalizar ')
    }else{

     
        let quantidade = valores.length
        let maior = valores[0] ; 
        let menor = valores[0] ; 

        let soma = 0 ; 
        let media = 0 ; 


        for(let pos in valores){
            
            soma += valores[pos]

          

            if(valores[pos] > maior){
                maior = valores[pos]
            }else if(valores[pos] < menor){

                menor = valores[pos]

            }

        }

        media = soma / quantidade
        res.innerHTML = " "

        res.innerHTML += `<p> ao todo temos  ${quantidade} numeros cadastrados</p>`
        res.innerHTML += `<p> O maior valor informado foi  ${maior}</p>`
        res.innerHTML += `<p> O menor valor informado foi  ${menor}</p>`
        res.innerHTML += `<p> a soma dos valores é igual a   ${soma}</p>`
        res.innerHTML += `<p> a mediaa dos valores é igual a   ${media}</p>`
    }
 



}

