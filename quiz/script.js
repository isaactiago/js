//dados 


let actualQuestion = 0 ; 

let correctQuestion = 0 ; 

getActualqueston() ;





//funcoes

function getActualqueston(){

    let q = questions[actualQuestion] ;

    if(questions[actualQuestion]){

        document.querySelector('.questionArea').style.display = 'block' ;
        document.querySelector('.question').innerHTML = q.question ;
    
        let getoptions = '' ;  
        for(let i in q.option){
    
            getoptions += `<div data-op=${i} class="option"><span>${parseInt(i) + 1}</span>${q.option[i]} </div>` ;
             
    
        }
    
        document.querySelector('.options').innerHTML = getoptions ; 
    
        document.querySelectorAll('.options .option').forEach(item=> {
            item.addEventListener('click', clickedOption)
        })
  
        
    

    }else{
        //
    }
    
 
  
    

    




}

function clickedOption(e){

    let clickedOption = parseInt(e.target.getAttribute('data-op')) // revisa o porque dessa parte. assistir novamente o video para entender 
     

   // console.log(clickedOption)

    //agora eu consigo fazer a verificação da resposta corret 

    if(correctQuestion === clickedOption){
        alert("kdslfk")
    }
        

    
}


