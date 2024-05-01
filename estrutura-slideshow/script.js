let totalSliders = document.querySelectorAll('.slider--item').length ;

 let currentSlide = 0 ; //variavel de ambiente






document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSliders})`; // A largura vai ser a largura da tela vezes a quantidade de sliders

document.querySelector('.slide--controls').style.width =
`${document.querySelector(".slider").clientWidth}px` ;

document.querySelector('.slide--controls').style.height =
`${document.querySelector(".slider").clientHeight}px`/* Vai pegar a altura do meu slider e joga aqui */
// clientHeight vai pegar a altura de uma div que ja tem altura 


function goPrev(){
    currentSlide-- ; 
    if(currentSlide < 0){
        currentSlide = totalSliders - 1 ; //ultimo slide vai ser o 2  ; 


    }

    updateMargin() ; 
    
}

function goNext(){
    currentSlide++ ; 
    if(currentSlide > (totalSliders -1)){
        currentSlide = 0 ; 
    }
    updateMargin() ; 

}

function updateMargin(){
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;

    let newMargin = (currentSlide * sliderItemWidth);
   document.querySelector(".slider--width").style.marginLeft = `-${newMargin}px`;

}

setInterval(goNext,5000)



