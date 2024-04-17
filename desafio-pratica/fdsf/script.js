let digital = document.querySelector(".digital") ; 
let sPonteiro = document.querySelector('.p_s') ;
let mPonteiro = document.querySelector('.p_m')
let hPonteiro = document.querySelector('.p_h')

function  AddRelogio(){

    let date = new Date() ;
    let horas = date.getHours() ;
    let minutos = date.getMinutes() ; 
    let segundos = date.getSeconds() ;

    digital.innerHTML = `${addZero(horas)} : ${addZero(minutos)} : ${addZero(segundos)}` ; 


    let sdeg = ((360/ 60 ) * segundos ) -  90  
    let mdeg = ((360/ 60 ) * minutos ) -  90  
    let hdeg = ((360/ 12 ) * horas )  - 90 

    sPonteiro.style.transform = `rotate(${sdeg}deg)`
    mPonteiro.style.transform = `rotate(${mdeg}deg)`
    hPonteiro.style.transform = `rotate(${hdeg}deg)`

}

function addZero(timer){

    if(timer < 10 ){

        return '0' + timer
    }else{
        return timer
    }




}


setInterval(AddRelogio,1000) ;
AddRelogio() ;
