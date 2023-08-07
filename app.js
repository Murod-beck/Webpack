const bodys = document.querySelector("body");
const text = document.querySelector("h1");
const inputs = document.querySelector(".form-check-input");
const icons = document.querySelector(".bi");
const labels = document.querySelector(".form-check-label");
const card = document.querySelector(".card");

//Dark Light
inputs.addEventListener("click", () => {
  card.classList.toggle("cards");
  text.classList.toggle("texts");
  bodys.classList.toggle("bodys");
  icons.classList.toggle("bi-moon-fill");
  if (labels.textContent === "Light") {
    labels.textContent = "Dark";
  } else {
    labels.textContent = "Light";
  }
});
