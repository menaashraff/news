async function weather(city){
 var x = "62620027abdd4712932190322260310";
 var location = city;
 var y =`http://api.weatherapi.com/v1/current.json?key=${x}&q=${location}`;
 console.log(y);
 var response =  await fetch(y);
 var data = await response.json();
 console.log(data);
 var weathericon=document.querySelectorAll("#temp img")[0].setAttribute("src","https:"+data.current.condition.icon);
var weathericon1=document.querySelectorAll("#temp h2")[0].innerHTML=data.current.temp_c+"°C";
var weathericon2=document.querySelectorAll("#temp h3")[0].innerHTML=data.location.name;
}
weather("cairo")
