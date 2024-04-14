function clicar(){

       let area =  document.querySelector('.area') ;

        let date = new Date()
        let ano = date.getFullYear()
        let dataNasc = document.querySelector('.ano') ;

       
       

        

       idade = ano - dataNasc 

        if(dataNasc.value.length === 0 || dataNasc.value > ano){
            alert('Erro verifique os dados ')
        }else{
           
            var sexo = document.getElementsByName('sexo') ; 
            idade = ano - parseInt(dataNasc.value) ;

            let genero = ' ' ; 

           
            let img = document.createElement('img')

           


            if(sexo[0].checked){
                genero = 'Homem'

                if(idade >= 5 && idade <= 11 ){
                    img.setAttribute('src','crianca.JPG') ;

                }else if(idade > 18 && idade < 60){
                    img.setAttribute('src','homi.JPG') ;
                }else if(idade > 60){
                    img.setAttribute('src','idoso.JPG') ;
                }

            }else{
                genero =  'mulher'

                if(idade >= 5 && idade <= 11){
                    img.setAttribute('src','crianca-menina.jpg') ;
                } else if(idade > 18 && idade < 60){
                    img.setAttribute("src",'mulher1.JPG') ;
                }else if(idade > 60){
                    img.setAttribute("src",'idosa1.JPG')
                }
                    
                
            }

            area.innerHTML = `Detectamos ${genero} com  ${idade} anos `
            area.appendChild(img)

               
        }
}





