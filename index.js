const Darkmode = document.getElementById("moon-mode");
const navbarToggle = document.getElementById("navbar-toggle");
const mainContent = document.querySelector(".main-content");
const form = document.getElementById("a-form");
const formParts = document.querySelectorAll(".part");
const stepControl = document.getElementById("step-control");
const steps = document.querySelectorAll(".step");
const btnControl = document.querySelector(".button-control");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".previous-btn");
const minusBtn = document.querySelector(".minus-btn");
const addBtn = document.querySelector(".add-btn");
const quantity = document.querySelector(".quantity");
const cartItems = document.querySelector(".cart-items");

let step = 0;
let navbarSwitch = 0;

function handleBtnControlClicked(e) {
  e.preventDefault();
  const nowStep = steps[step];
  if (e.target.matches(".btn-next") && e.target.innerHTML !== "確認下單") {
    const nextStep = steps[step + 1];
    nowStep.classList.remove(".active");
    nowStep.classList.add("checked");
    nextStep.classList.add("active");
    formParts[step].classList.toggle("d-none");
    formParts[step + 1].classList.toggle("d-none");
    step += 1;
  } else if (e.target.matches(".previous-btn")) {
    const prevStep = steps[step - 1];
    nowStep.classList.remove("active");
    prevStep.classList.remove("checked");
    formParts[step].classList.toggle("d-none");
    formParts[step - 1].classList.toggle("d-none");
    step -= 1;
  }
  setBtnDisabled();
}

function setBtnDisabled() {
  if (step === 0) {
    prevBtn.classList.add("d-none");
    prevBtn.innerHTML = "";
    prevBtn.setAttribute("disabled", "disabled");
  } else {
    prevBtn.classList.remove("d-none");
    prevBtn.removeAttribute("disabled");
    prevBtn.innerHTML = "&#8592上一步";
  }
  if (step === 2) {
    nextBtn.innerHTML = "確認下單";
  } else {
    nextBtn.innerHTML = "下一步&#8594";
  }
}

// Cart items

function handleCartItem(e) {
  const node = e.target.parentNode.children[1];
  const btn = e.target;

  if (btn.innerText === "-" && btn.nextElementSibling.innerText > 0) {
    let num = btn.nextElementSibling.innerText;
    num -= 1;
    btn.nextElementSibling.innerHTML = num;
  } else if (btn.innerText === "+") {
    let num = parseInt(btn.previousElementSibling.innerText);
    console.log(num);
    num += 1;
    btn.previousElementSibling.innerHTML = num;
  }
}

// Handle dark mode function
function handleDarkMode(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "root");
  }
}

function handleNavbar(e) {
  if (e.target.checked) {
    mainContent.classList.add("disappear");
    mainContent.classList.remove("appear");
  } else {
    mainContent.classList.add("appear");
    mainContent.classList.remove("disappear");
  }
}

navbarToggle.addEventListener("click", handleNavbar);
Darkmode.addEventListener("change", handleDarkMode);
cartItems.addEventListener("click", handleCartItem);
btnControl.addEventListener("click", handleBtnControlClicked);
