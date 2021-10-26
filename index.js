const form = document.getElementById("a-form");
const formParts = document.querySelectorAll(".part");
const stepControl = document.getElementById("step-control");
const steps = document.querySelectorAll(".step");
const btnControl = document.querySelector(".button-control");
const nextBtn = document.querySelector(".btn-next");
const prevBtn = document.querySelector(".previous-btn");

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

btnControl.addEventListener("click", handleBtnControlClicked);
