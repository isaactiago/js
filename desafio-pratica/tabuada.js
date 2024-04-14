

document.querySelector('.button').addEventListener('click',()=>{


    let input = document.getElementById('numero') ; 
    let select = document.querySelector("#tabuada")
    select.innerHTML = " Digite o numer acima "
   
   

    if(input.value.length === 0){

        alert("verifique os dados ewero ")

    }else{
       
        let x = parseInt(input.value)
       

        for(let i = 0 ; i <= 10 ; i++){

            let res = x * i ; 
           let area = document.createElement('option') ; 

           area.innerHTML =   `${x} X ${i} = ${res}`

           select.appendChild(area) ; 
        
            
        }

       
    }
})


