import React, { useEffect, useState } from "react";

function Weather() {
  const [location, setLocation] = useState({});
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const onGeoOk = (position) => {
      const lat = position.coords.latitude;
      const lng = position.coords.longitude;
      const key = "YOUR_API_KEY"; // 여기에 API 키를 입력하세요
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${key}&units=metric`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setLocation({ name: data.name });
          setWeather({ main: data.weather[0].main });
        });
    };

    const onGeoError = () => {
      alert("찾을 수 없습니다. 에러!");
    };

    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
  }, []);

  return (
    <div id="weather">
      <span>{location.name}</span>
      <span>{weather.main}</span>
    </div>
  );
}

export default Weather;
