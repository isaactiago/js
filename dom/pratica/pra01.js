function clicar(){
    const senha = document.querySelector('.senha') ; 

    const button = document.querySelector('.button') ;

    if(senha.getAttribute('type') === 'text'){
        senha.setAttribute('type','password') ;
        button.innerHTML = 'mostrar senha '
    }else{
        senha.setAttribute('type','text')
        button.innerHTML = ' ocultar senha '
    }
    
}