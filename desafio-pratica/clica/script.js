


document.querySelector('.busca').addEventListener("submit", async(event)=>{


    event.preventDefault() ;

    let input = document.querySelector('#searchInput').value ; 

   if(input !== ''){

        Aviso('Carregando...') ; 

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=d06cdb298fafc83c520d5ab677fc477e&units=metric&lang=pt-br` ; 

        let response = await fetch(url) ;
        let json = await response.json() ; 

        if(json.cod === 200){

           
                addResultado({
                    name : json.name ,
                    country : json.sys.country ,
                    temp : json.main.temp ,
                    tempicon: json.weather[0].icon,
                    windDeg : json.wind.deg ,
                    windSpeed : json.wind.speed ,


        
                })
            

        }else{
            Aviso('erro !!! cidade nao encontada')
        }

   }else{
        alert('Verifique se vc digitou os campos ')
   }

    


})


function Aviso(msg){

    document.querySelector('.aviso').innerHTML = msg ; 
}





function addResultado(json){

        Aviso('' ) ; 

        document.querySelector('.resultado').style.display = 'block'
        document.querySelector('.titulo').innerHTML = json.name
        document.querySelector(".tempInfo").innerHTML = `${json.temp}    c   `
        document.querySelector(".ventoInfo").innerHTML = `${json.windSpeed} `
        document.querySelector('.ventoPonto').style.transform =`rotate(${json.windDeg - 90}deg)`
       
       
        document.querySelector(".temp img ").setAttribute('src',`http://openweathermap.org/img/wn/${json.tempicon}@2x.png`)
        
}