const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

// dependChild 는 맨 앞의 자리에 붙인다.
// 맨 뒤의 자리에 붙인다.
document.body.appendChild(bgImage);
