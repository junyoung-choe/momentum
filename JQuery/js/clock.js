const clock = $("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.text(`${hours}:${minutes}:${seconds}`);
}

// 처음 시작 딜레이를 막기위함
getClock();
setInterval(getClock, 1000);
// console.log(clock.text());
