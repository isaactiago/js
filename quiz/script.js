//dados 


let actualQuestion = 0 ; 

let correcanswer = 0 ; 

getActualqueston() ;


//eventos 

document.querySelector("button").addEventListener("click", reset)


//funcoes

function getActualqueston(){

    let q = questions[actualQuestion] ;

    let pct = Math.floor((actualQuestion / questions.length) * 100)
    document.querySelector(".progress--bar").style.width = `${pct}%`

    if(questions[actualQuestion]){

        document.querySelector('.questionArea').style.display = 'block' ;
        document.querySelector('.question').innerHTML = q.question ;
    
        let getoptions = '' ;  
        for(let i in q.option){
    
            getoptions += `<div data-op=${i} class="option"><span>${parseInt(i) + 1}</span>${q.option[i]} </div>` ;
             
    
        }
    
        document.querySelector('.options').innerHTML = getoptions ; 
    
        document.querySelectorAll('.options .option').forEach(item=> {
            item.addEventListener('click', clickedOptionEvent)
        })
  
        
    

    }else{
        //acabou 

        finish()
    }
    
 
  
    

    




}

function clickedOptionEvent(e){

    let clickedOption = parseInt(e.target.getAttribute('data-op')) // revisa o porque dessa parte. assistir novamente o video para entender 
     

   // console.log(clickedOption)

    //agora eu consigo fazer a verificação da resposta corret 

    if(questions[actualQuestion].answer === clickedOption){
        correcanswer++ ; // vai dizaer quantas eu acertei no final 
      
       
       
       
        
    }
  
    actualQuestion++ ; //rever essa parte 
    getActualqueston() ;

 
        

    
}


function finish(){

    document.querySelector('.questionArea').style.display = 'none' ;
    document.querySelector(".scoreArea").style.display = 'block'
    document.querySelector(".progress--bar").style.width = `${100}%`

    let scorePct = Math.floor((correcanswer/ questions.length) * 100)
    document.querySelector('.scorePct').innerHTML = `${scorePct}%`
    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${correcanswer} !!!!! `


    if(correcanswer >= 3){

        document.querySelector('.scoreText1').innerHTML = `Parabens !!!`
        document.querySelector('.scoreText1').style.color = `green`

        document.querySelector("scoreText2").innerHTML = `Acertou ${correcanswer} de ${questions.length}`

    }else{
        document.querySelector('.scoreText1').innerHTML = `Ruim, estude mais emm !!!`
        document.querySelector('.scoreText1').style.color = `red`

      

    }

   



   
}

function reset(){

  
    correcanswer = 0 ;
    actualQuestion = 0 ; 

    document.querySelector(".scoreArea").style.display = 'none'

    

    getActualqueston() ;



}


