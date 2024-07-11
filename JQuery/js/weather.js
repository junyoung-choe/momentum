const WeatherForm = $("#weather");
const Name = WeatherForm.find("span:first-child");
const Weather = WeatherForm.find("span:last-child");
function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lng = position.coords.longitude;
  const key = "";
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}`;
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
