//aula 1  -- o que é OO

//a sigla significa orientação objetos . 

// progamação orientada a objetos a forma que voçe cria o seu codigo quem guia seus codicos são objetos . 

// Objeto nada mais é do que uma simulaçao de um objeto real do mundo real


//resumindo ::  progamação orientada a objetos nada mais do que uma progamação em que eu crio objetos, e um se comunica com outro.



//aula 2 -- POO no javascript 


//Progamação orientada a objetos (POO - OOP)

//Progamaçao Procedural - sequencia de codigo/ um codigo de baixo do outro

// Progamação funcional (FP) (functional progamaning paradigma)


//Nos vamos aprender essas duas em progamação orientada a objetos 

//-Classes 
//-funcçoes/objetos


//Aula 3 -- Classes :  Construtor e This


/* 

class Person { //Primeiro nome tem que ser maiusculo 

    constructor(name, age){
        this.name = name ; //o this se refere ao propio objeto que estou criando

        this.age = age ;
    }


}

*/

//aula 4 -- Classes: Instancia 




//class Person { //Primeiro nome tem que ser maiusculo 

  
    //age = 0 ;

    //constructor(name, age){
    //    this.name = name ; //o this se refere ao propio objeto que estou criando

        //this.age = age ;
  //  }


//}

//istancia // p1 sim é um objeto 

//let p1 = new Person('isaac', /* 18 */) ;

//let p2 = new Person('samily', /* 17 */); 

//let p3 = new Person('Elio', /* 53 */) ;

//p1.age = 18 ;

//console.log(`p1 = ${p1.name} tem ${p1.age}`)
//console.log(`p2 = ${p2.name} tem ${p2.age}`)
//console.log(`p3 = ${p3.name} tem ${p3.age}`)


//aula 5 Classes: Action 


//ordem 

//1 as variaves 

//2 os construtores 

//3 as ações 

/* 

class Person { //Primeiro nome tem que ser maiusculo 

  
    age = 0 ;

    steps = 0 ;

    constructor(name, age){
        this.name = name ; //o this se refere ao propio objeto que estou criando

        //this.age = age ;
    }

    takeStep(){
        this.steps++ ; //adicionando numeros ao contador de pássos 
    }

    setAge(newAge){
        if(typeof newAge == 'number'){//aqui ele ta verificando se o tipo é um numero 

            this.age = newAge ;

        }
      
    }


}

//istancia // p1 sim é um objeto 

let p1 = new Person('isaac') ;

let p2 = new Person('samily'); 

let p3 = new Person('Elio') ;

//p1.takeStep() ;
p1.setAge(18) ; 

console.log(` ${p1.name} tem ${p1.age}`)




*/


//aula 6 -- Classes Getter e Setter 


/* 

class Person { //Primeiro nome tem que ser maiusculo 

  
    _age = 18 ;


    constructor(firstName,lastName){
        this.firstName = firstName ; //o this se refere ao propio objeto que estou criando
        this.lastName = lastName ;
        //this.age = age ;
    }

  

    get fullName(){
        return `${this.firstName} ${this.lastName}`; 
    }
    
    get age(){
        return this._age ; //vai pegar a idade 
    }

    set age(x){ //vai pegar a idade e vai poder mudar ela la em baixo em forma de variavel 

        if(typeof x == 'number'){
            this._age = x ;
        }else{
            console.log("erroo!!!")
        }
     
    }
    


}

//istancia // p1 sim é um objeto 

let p1 = new Person('isaac', 'wandermurem') ;

let p2 = new Person('samily', 'souza'); 

let p3 = new Person('Elio','wandermurem') ;

//p1.takeStep() ;

p1.age = 20
console.log(` ${p1.fullName} tem ${p1.age}`)





*/



// aula 7 -- Classes: Herança 


/* 

class Person{

    age = 0 ; 

    constructor(name){
        this.name = name ;
    }

    sayh1(){
        console.log(`${this.name} diz  oi `)
    }

}

class Student extends Person {

        
        constructor(name,id){
            super(name)
            this.id = id ;

        }

        sayh1(){
            //console.log(`${this.name} mudo papai ` )
            super.sayh1();
        }
}

let p1 = new Student('isaac',1)
p1.age = 18 ;
p1.sayh1()
console.log(`${p1.name} tem matricula #${p1.id} e ${p1.age} anos `)

*/


//aula 8 -- classes :  Variável/Método estático

/* 
class Person{

    static hands = 2 ;
    age = 0 ;

    constructor(name){
        this.name = name ;
    }

   // sayHi(){
     //   console.log(`Oi, eu sou ${this.name} e tenho ${Person.hands} mãos`)
    //}

    static sayHi(){
        console.log(` oi`)
    }
}

let p1 = new Person('isaac')

Person.hands = 4
//p1.sayHi();

Person.sayHi()

  


*/


//aula 9 -- Classes: Factory 

/* 

class Person{

    age = 0 ;

    constructor(name){
        this.name = name ;
    }
}

//factory

function createPerson(name,age){
    let p = new  Person(name)
    p.age = age ; 
    return p
}

let p1 = createPerson('isaac',18)

console.log(`${p1.name} tem ${p1.age}`)

*/


//aula 17 Introdução a progamação funcional 

//  é quando executamos uma função dentro de um função 


// aula 18 -- Funcional:Factory 


/* 
function createPerson(name,lastName,age){

    return {
        name ,
        lastName ,
        age 
    }

}


let Person1= createPerson('isaac','wandermurem',90)
let Person2= createPerson('isrt','rmurem',40)

console.log(Person1.lastName)

console.log(Person1.name)

console.log(Person2.age)


*/


//aula 18 --  Funcional: Instância e This 


/* 

function createPerson(name,lastName,age){

    return{
        name ,
        lastName ,
        age,

        getFullName() {

            return `${this.name} ${this.lastName}` ;
        }
    }
}


let Person1= createPerson('isaac','wandermurem',90)
let Person2= createPerson('isrt','rmurem',40)


console.log(Person1.getFullName())


*/


// aula 19 -- Funcional: Construtor


/* 
let createperson = {

    name:'isaac',
    lastname: 'wandermuerem' ,
    age: 0 , 

    getFullName(){

        return `${this.name} ${this.lastname}`

    } ,

    start(){
        console.log('NDFSKFNS')
    }
}

console.log(person.getFullName())



*/


// aula 20 -- Funcional: Herança 


/* 


const defaultUser = {

    name: ' ' ,
    email : '' , 
    level: 1 ,

}

let user1 = {

    ...defaultUser, //clonei o objeto dentro do objrto que eu quero criar 
    name: ' isaac' ,
    email: 'sjaosjao@sodkos.com', 


}


let adm1 = {
    ...defaultUser ,

    name : 'admim sasas' ,
    email : 'vvvvvvvv@gmali.com' ,
    level : 2 ,
}

console.log(adm1)



*/

// AULA 21 -- Projeto: Luta Funcional 

const char = CreatGuerrerio('isaac')

const monster = CreatLittleMoster() ;


cenario.start(

    char ,
    monster ,
    document.querySelector('#char'),
    document.querySelector('#monster') ,
   
) ;

