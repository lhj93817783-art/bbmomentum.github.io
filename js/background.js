const images = ["basket1.jpg", "basket2.jpg", "basket3.jpg", "basket4.jpg", "basket5.jpg","basket6.jpg", "basket7.jpg", "basket8.gif"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `file:///C:/Users/Default/Documents/momentum/img/${chosenImage}`;
document.body.appendChild(bgImage);
bgImage.classList.add("image")