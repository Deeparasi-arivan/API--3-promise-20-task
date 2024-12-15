//dog image fetch
document.getElementById("dog-btn1").addEventListener("click", ()=>
     {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(response =>response.json())
    .then(data =>{
        const resultDiv = document.getElementById(dog-result);
        resultDiv.innerHTML = '<img src ="${data.message}" alt="Random Dog" class="img-thumbnail">';
    })
    .catch( error =>console.error("Error fetching dog image:",error));
    
});

//Random user API - fetch 
//Random user API- data
document.getElementById("user-btn").addEventListener ("click" ,()=> {
    fetch("https://randomuser.me/api/")
    .then(response =>response.json())
    .then(data => {
        const user =data.result[0];
        const resultDiv = document.getElementById("user-result");
        resultDiv.innerHTML =<p><strong>Name : </strong>${user.name.first} ${user.name.last}</p>
        '<p><srong>Email :</srong>${user.email}</p>
        <p><strong>Location : </strong> ${user.location.city} ${user.location.country} </p>
        <img src="${user.picture.medium}" alt="user image" class ="img-thumbnail">';</img>
    })

    .catch(error => console.error("Error fetching user data :",error));
//});

 // openWeatherMap API - fetch Weather Data
  const apiKey = "Your_API_key";
  //replace with your openweatherMap API key
  document.getElementById("weather-btn").addEventListener("click" ,()=> {
    const city = document.getElementById("city-input").value;
  })
  if(!city){alert("please enter a city name");
    return;
  }
  fetch('history.openweathermap.org/data/2.5/aggregated/year?lat={lat}&lon={lon}&appid={API key}')
  .then(responce => responce.json())
  .then(data =>{
    const resultDiv =document.getElementById("weather-result");
    resultDiv.innerHTML =' <p><strog>city :</strog>${data.city}</p>
    <p><strong>Temperature :</strong>${data.main.temp}🌡️C</p>
    <p><strong>weather :</strong>${data.weather[0].description}</p>';
  })
  .catch(error =>console.error("Error fetching weather data:",error));
});






















// openWeatherMap API - fetch Weather Data
let weatherApi = fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=bc47567f1e44df16c87b34d909e1065b`
  );
  weatherApi
    .then((data1) => data1.json())
    .then((res) => {
      //console.log(res);
      alert(
        `Weather of ${result[index].name.common} is ${Math.floor(
          res.main.temp
        )}🌡️C`
      );
    });
});
});
});

// appending part
container.append(row);
document.body.append(h1, container);




