//ex1

/* 
function calcPct(n1,n2){

    return (n2/n1) * 100 ;
}

let x = 50 ;
let y = 10  ;

let pct = calcPct(x,y)
console.log(`${pct}% de ${x} é ${y}`);

*/

//ex2 




//function calcImovel(metragem,quartos){
    /* com if 
    
         m2 = 3000 ;
    if(quartos === 1){
        return metragem * (m2 * 1) ;
    }else if(quartos === 2){
        return metragem * (m2 * 1.2) ;
    }else if(quartos === 3){
        return metragem * (m2 *1.5) ;
     }else{
        return ` ops nao temos esse imovel, desculpa !!!!`
   }
    */

   // com swich 


   //m2 = 3000 ;
   //let preco ; 

   //switch(quartos){
        //case 1 : 
          //  preco = metragem * m2 ;
       // break ;

       // case 2 :
         //   preco = metragem * (m2 * 1.2 ) ;
       // break ; 

      //  case 3 : 
          //  preco = metragem * (m2 * 1.5 ) ;
      //  break ; 

       // default : 
        //    return 'acabo'
       // break
  //  }
   // return preco;
  
//}

//let metragem = 123 ;

//let quartos = 4 ; 

//let preco = calcImovel(metragem,quartos);

//console.log(`A casa custa R$ ${preco}`)


/* 

function validar(usuario,senha){

  

     if(usuario === "isaac" && senha === 123){
        return true ;
     }else{
        return false ;
     }
     
   
     
    
   

    
}

let usuario = "isaac"; 
let senha =  123 ; 

let validacao = validar(usuario,senha) ; 

if(validacao){
    console.log("Acesso concedido ")
} else {
    console.log("Acesso negado ")
}




*/





function validar(usuario,senha){
    if(usuario === "isaac" && senha === 123){
        return true ;
    }else {
        return false ;
    }

}

let usuario = "isaac" ; 

let senha = 123 ;

let validacao = validar(usuario,senha);

if(validacao){
    console.log("acesso concedido");
}else{
    console.log("acesso negado");
}