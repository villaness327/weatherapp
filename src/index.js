

const URL_API="livescore6.p.rapidapi.com/matches/v2/list-live?Category=soccer";


const getNews=async(API)=>{

    try{

      const response=await fetch(API,{
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "7055b2f896msh943db111f4fb06cp190d11jsn7205b1c6dc97",
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
       });
      const data=await response.json();

      console.log(data);


    }catch(error){
      console.error(error);
    }
}

getNews(URL_API);

/*
fetch("https://api-football-v1.p.rapidapi.com/v3/leagues?country=England", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "7055b2f896msh943db111f4fb06cp190d11jsn7205b1c6dc97",
		"x-rapidapi-host": "api-football-v1.p.rapidapi.com"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.error(err);
});*/