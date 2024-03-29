function clicar(){
    const input = document.querySelector('.senha');

    const button = document.querySelector('.button') ;

    if(input.getAttribute('type') === 'text'){
        input.setAttribute('type','password') ;
    }else {
        input.setAttribute('type','text') ;
    }
}