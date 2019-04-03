//api code
var getWeather = function(zipcode) {
  $.get('http://api.openweathermap.org/data/2.5/weather?zip=' + zipcode + '&appid=' + apiKey).then(function(response) {
    cTemp=((response.main.temp)-273.15)
    fTemp=((cTemp)*(9/5)+32)
    console.log(response)
    console.log(fTemp);
  }).fail(function(error) {
    console.log(error.responseJSON.message);
  });
}


/*
http://api.openweathermap.org/data/2.5/weather?q=portland&appid=f5f64ba1d369197d4ef4f7b84d814759
*/


//user interface logic
$(document).ready(function() {
  $("form#zipcode-enter").submit(function(event){
    var zipcode = parseInt($("input#zip").val());
    getWeather(zipcode);
    // alert(zipcode);
    event.preventDefault();
  })
})



// $(document).ready(function () {
//   $(".form-group").submit(function (event) {
//     var person1Input = $("input#degrees").val();

//     if (inputteddegreesInput <= 0) {
//       $("#snorkeling").show();
//     } else if (person1Input > 3 && person1Input <= 7) {
//       $("#cenote").show();
//     } else {
//       $("#quads").show();
//     }
//     event.preventDefault();
//   });
// });
