
let totalSliders = document.querySelectorAll(".slider--item").length ;



document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSliders})`; // A largura vai ser a largura da tela vezes a quantidade de sliders

document.querySelector('.slider--controls').style.height =
`${document.querySelector('.slider').clientHeight}px` ;  /* Vai pegar a altura do meu slider e joga aqui */
// clientHeight vai pegar a altura de uma div que ja tem altura 



