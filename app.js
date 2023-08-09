const bodys = document.querySelector("body");
const text = document.querySelector("h1");
const input = document.querySelector(".form-check-input");
const icons = document.querySelector(".bi");
const labels = document.querySelector(".form-check-label");
const card = document.querySelector(".card");

//Dark Light
const modeLocal = localStorage.getItem("mode");

if (modeLocal) {
  localMode();
  input.setAttribute("checked", "checked");
}

function localMode() {
  text.classList.toggle("texts");
  bodys.classList.toggle("bodys");
  icons.classList.toggle("bi-moon-fill");
  if (labels.textContent === "Light") {
    labels.textContent = "Dark";
    localStorage.setItem("mode", "dark");
  } else {
    labels.textContent = "Light";
    localStorage.setItem("mode", "");
  }
}

input.addEventListener("click", () => {
  localMode();
});
