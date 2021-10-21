const imgPlaceHolder = document.querySelector("img");
const nxetBtn = document.querySelector("button[name=next]");

const defaultImg = "images/poco-logo.jpg";
imgPlaceHolder.src = defaultImg;

nxetBtn.addEventListener("click", getRandomImg);

function getRandomImg() {
  const urlAddress = "https://api.thecatapi.com/v1/images/search";
  fetch(urlAddress)
    .then((Response) => Response.json())
    .then((jsonData) => (imgPlaceHolder.src = jsonData[0].url));
}
