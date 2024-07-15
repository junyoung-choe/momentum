import React, { useEffect } from "react";

const images = ["1.jpeg", "2.jpeg", "3.jpeg"];

function Background() {
  useEffect(() => {
    const chosenImage = images[Math.floor(Math.random() * images.length)];
    const bgImage = document.createElement("img");
    bgImage.src = `img/${chosenImage}`;
    bgImage.style.position = "absolute";
    bgImage.style.top = "0";
    bgImage.style.left = "0";
    bgImage.style.width = "10%";
    bgImage.style.height = "10%";
    bgImage.style.objectFit = "cover";
    document.body.appendChild(bgImage);

    return () => {
      document.body.removeChild(bgImage);
    };
  }, []);

  return null;
}

export default Background;
