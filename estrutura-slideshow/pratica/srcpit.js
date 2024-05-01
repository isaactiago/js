
let currentSlide = 0 ; 
let totalSliders = document.querySelectorAll(".slider--item").length ; 

document.querySelector('.slider--width').style.width = `calc(100vw *${totalSliders})`


function goPrev(){
    currentSlide-- ; 

    if(currentSlide < 0 ){
        
        currentSlide = totalSliders - 1; 
    }

    updateMargin();
    
}

function goNext(){

    currentSlide++ ;

    if(currentSlide > (totalSliders -1)){

        currentSlide = 0 ; 
    }

    updateMargin();
    
}

function updateMargin(){

    //basicamente a nova margin vai ser o total de fotos vezes a largura da div que elas estao dentro 
    let sliderItemWidth = document.querySelector('.slider--item').clientWidth;
    let newMargin = (currentSlide * sliderItemWidth);

    document.querySelector(".slider--width").style.marginLeft =`-${newMargin}px`

    

}

setInterval(goNext,3000)
