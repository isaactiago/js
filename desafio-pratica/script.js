


document.querySelector('.button').addEventListener('click',()=>{

    let produto = prompt('Que produto voce esta comprando ?') ; 
    let preco = prompt(`Quanto custa o preço de ${produto}`)

    let valor = prompt(`Qual foi o valor que voçe deu para pagar o ${produto}`)

    const troco =  valor - preco  ;

     

  

    if(troco > 0){
  
        alert(`Voçe comprou o ${produto.match} que custou ${preco}R$. deu ${valor} em dinheiro e vai receber ${troco }R$ de troco `)
    
    }else if(troco === 0  ){
        alert(`Voçe comprou o ${produto} que custou ${preco}R$. deu ${valor} em dinheiro e nao  recebera o  troco. Voce nao  ta devendo !!!  `)

    }else if(troco < 0  ){
        
       alert(`Voçe comprou o ${produto} que custou ${preco}R$. deu ${valor} em dinheiro e nao  recebera o  troco. Voce ta devendo !!!  `)

    }
})