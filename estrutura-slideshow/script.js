let totalSliders = document.querySelectorAll('.slider--item').length


document.querySelector(".slider--width").style.width = `calc(100vw * ${totalSliders})` ;

document.querySelector(".slide--controls").style.height = `${document.querySelector('.slider').clientHeight}px`;




