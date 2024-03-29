const defaultCaracteristica = {

    name : ' ' ,
    life : 1 ,
    maxLife : 1 ,
    attack : 0 ,
    defense :  0 ,



}

const CreatGuerrerio = (name) => {

    return{

        ...defaultCaracteristica ,
        name,
        life : 100 ,
        attack : 10 , 
        defense : 8 ,
        maxLife : 100 ,
    }


}
  

const CreatMago = (name) => {

    return{
        ...defaultCaracteristica ,
        name ,
        name,
        life : 80 ,
        attack : 15 , 
        defense : 3 ,
        maxLife : 80 ,
    }

}


const CreatLittleMoster = (name) => {

    return {
        ...defaultCaracteristica ,
        
        name: 'LittleMoster ',
        life : 40 ,
        attack : 4 , 
        defense : 4 ,
        maxLife : 40 ,
    }
}


const CreatBigMoster = (name) => {

    return {
        ...defaultCaracteristica ,
        
        name: 'BigMoster',
        life : 120 ,
        attack : 16 , 
        defense : 6 ,
        maxLife : 120 ,
    }
}


const cenario = {

    lutador1: null , 
    lutador2: null,
    lutador1EL: null ,
    lutador2EL: null ,

    start(lutador1,lutador2,lutador1EL,lutador2EL){

            this.lutador1 = lutador1 ;
            this.lutador2 = lutador2 ;
            this.lutador1EL = lutador1EL ;
            this.lutador2EL = lutador2EL ;


            this.lutador1EL.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.lutador1,this.lutador2))

            this.lutador2EL.querySelector('.attackbutton').addEventListener('click', () => this.doAttack(this.lutador2,this.lutador1))

            this.update() ;
    } ,

    update(){

        //lutador1 
            this.lutador1EL.querySelector('.name').innerHTML = `${this.lutador1.name} - ${this.lutador1.life.toFixed(1)} HP`

            let pctl1 = (this.lutador1.life / this.lutador1.maxLife) * 100

            this.lutador1EL.querySelector('.bar').style.width = `${pctl1}%`

        //lutador2

        this.lutador2EL.querySelector('.name').innerHTML = `${this.lutador2.name} - ${this.lutador2.life.toFixed(1)} HP`

        
        let pctl2 = (this.lutador2.life/this.lutador2.maxLife) * 100

        this.lutador2EL.querySelector('.bar').style.width = `${pctl2}%`


    } ,

    doAttack(atacando,atacado){

        if(atacando.life <= 0 || atacado.life <= 0 ){
            log.adddMensagem("atacndo cachorro morto ")
            return
        }


        const ataqueFator = (Math.random() * 2).toFixed(2);//isso vai gerar ums numeros aleatorios

        const defesaFator = (Math.random() * 2).toFixed(2);

        const atualataque = atacando.attack * ataqueFator;

        const defesaAtual = atacado.defense * defesaFator;

        if(atualataque > defesaAtual){
            atacado.life -= atualataque
            atacado.life = atacado.life < 0 ? 0 : atacado.life
            log.adddMensagem(`${atacando.name} causou ${atualataque} dano em ${atacado.name}`)
        }else{
            log.adddMensagem(`${atacado.name} conseguiu defender`)
        }

        this.update()
    }

       
      
        
}

const log = {

    list : [] ,

    adddMensagem(msg){
        this.list.push(msg)
        this.renderizar()
    },

    renderizar() {
        const logEL = document.querySelector('.log')

        logEL.innerHTML = '' ; 

        for(let i in this.list ){
            logEL.innerHTML += `<li>${this.list[i]}</li>`
        }
    }

}
