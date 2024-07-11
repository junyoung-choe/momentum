const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = $("<img>");

bgImage.attr("src", `img/${chosenImage}`);

$("body").append(bgImage);
