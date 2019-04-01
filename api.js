//api code 
var getWeather = function(zip) {
  $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zip + '&appid=' + apiKey).then(function(response) {
    cTemp=((response.main.temp)-273.15)
    fTemp=((cTemp)*(9/5)+32)
    console.log(response)
    console.log(fTemp);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}

getWeather("97035");
/*
http://api.openweathermap.org/data/2.5/weather?q=portland&appid=f5f64ba1d369197d4ef4f7b84d814759
*/
