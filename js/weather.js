const WeatherForm = document.querySelector("#weather");
const Name = WeatherForm.querySelector("span:first-child");
const Weather = WeatherForm.querySelector("span:last-child");
function onGeoOk(position) {
  // console.log(position);
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const key = "c2e763de6f29b05d887c0e31f5d443dc";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;
  console.log(url);

  // URL을 부른다.
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const name = data.name;
      const weather = data.weather[0].main;
      Name.innerText = name;
      Weather.innerText = weather;
    });
}
function onGeoError() {
  alert("찾을수 없습니다. 에러 !");
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
