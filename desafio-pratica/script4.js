

document.querySelector('.button').addEventListener('click', ()=>{

    let n1 = parseInt(document.querySelector('.n1').value)
    let n2 = parseInt(document.querySelector('.n2').value)
    let aluno = document.querySelector('.aluno').value
    let area = document.querySelector('.area') ;
    let txt = document.querySelector('.txt') ;
    let txt2 = document.querySelector('.txt2') ;

    area.innerHTML = ' '

    media = (n1 + n2) / 2 

    let h1 = document.createElement('h1') ;

    h1.innerHTML = `Analisando a situação de ${aluno}` ; 

    area.appendChild(h1)

    txt.innerHTML = `Com as notas ${n1} e ${n2}, a media é ${media}`

    area.appendChild(txt)


    if(media < 3){

        let cor = document.createElement('strong')
        cor.style.backgroundColor = 'red'
        cor.style.color =  'red'
        txt2.innerHTML =`com a media abaixo ${media} o aluno/aluna esta <strong>Reprovado</strong>`

        area.appendChild(txt2)
        txt.appendChild(cor)
        area.appendChild(cor)

    }else if(media >= 3 && media <= 6){

        let cor = document.createElement('strong')
       
        cor.style.color =  'yellow'
        txt2.innerHTML =`com a media ${media} o aluno/aluna esta de <strong>Recuperação</strong>`

        area.appendChild(txt2)
        txt.appendChild(cor)




    }else{
        let cor = document.createElement('strong')
        cor.style.backgroundColor = 'green'
        cor.style.color =  'green'
        txt2.innerHTML =`com a media ${media} o aluno/aluna esta <strong>Aprovado</strong>`

        

        area.appendChild(txt2)
        area.appendChild(cor)
    }
   

    

    
})