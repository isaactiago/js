//Dados
let currentQeustions  = 0 ; //variavel que vai armazena a questao atual 

let currentanswer = 0 ; 

ShowQeustions()


//eventes 

document.querySelector('button').addEventListener("click", reset)



//functions 


// Agora eu precisso fazer aparecer as questoex dinamicamente 


function  ShowQeustions(){

    

    let q = questions[currentQeustions]
    let pct = Math.floor(( currentQeustions/ questions.length) * 100)

    document.querySelector('.progress--bar').style.width = `${pct}%`
   
  

    if(questions[currentQeustions]){

        document.querySelector('.questionArea').style.display = 'block';
        document.querySelector('.question').innerHTML = q.question

        //tenho que criar um loop para pegar as minhas opçãoes de respostas 

        let getOptions = '' ; 

        for(let i in q.options){ 

            getOptions += `<div data-op=${i} class="option"><span>${parseInt(i) + 1}</span>${q.options[i]}</div>`

        }

        document.querySelector(".options").innerHTML = getOptions ;

      

        document.querySelectorAll('.options .option ').forEach(item =>{
            item.addEventListener("click", getOptionsEvent)


        })



       
    }else{
        //acabou as questoes 

        finishQuestions() ;
    }



        

      

        

    //}


}

function getOptionsEvent(e){

    let clickedOption = parseInt(e.target.getAttribute('data-op')) ; 

    
    // criar a condicional se clicou na resaposta certa 

    if(clickedOption === questions[currentQeustions].answer ){

       currentanswer++

    }

    setTimeout(ShowQeustions,1000)

    currentQeustions++
  
}

 function finishQuestions(){

    let pct2 = Math.floor((currentanswer / questions.length) * 100)

    document.querySelector('.questionArea').style.display = 'none' ;
    document.querySelector('.scoreArea').style.display = 'block'

    document.querySelector(".scorePct").innerHTML = `Acertou ${pct2}%`

    document.querySelector(".scoreText2").innerHTML = `Você respondeu ${questions.length} questões e acertou ${currentanswer}.`


    if(currentanswer >=3){
        document.querySelector(".scoreText1").innerHTML = "Parabens"

    }else{
        document.querySelector(".scoreText1").innerHTML = "Horrivel"

    }



}

 function reset(){

    currentQeustions = 0 ; 
    currentanswer = 0 ; 

    document.querySelector('.scoreArea').style.display = 'none'

    ShowQeustions();


 }