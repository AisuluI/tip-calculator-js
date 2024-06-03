const bill = document.querySelector("#bill");
const service = document.querySelector("#service");
const people = document.querySelector("#people");
const result = document.querySelector("#result");
const each = document.querySelector("#each");
const button = document.querySelector("#calculate");
const total = document.querySelector("#total");
const restartBtn = document.querySelector("#restart");
const footer = document.querySelector(".footer");

button.addEventListener("click", calculate);
restartBtn.addEventListener("click", restart);

function calculate() {
  let index = service.selectedIndex;
  let totalTip =
    (Number(bill.value) * Number(service.options[index].value)) / 100;
  result.style.visibility = "visible";
  total.style.visibility = "visible";

  if (people.value > 1) {
    result.innerHTML = (
      (Number(bill.value) + totalTip) /
      Number(people.value)
    ).toFixed(2);
    each.style.visibility = "visible";
  } else {
    result.innerHTML = (Number(bill.value) + totalTip).toFixed(2);
  }
}
// restartBtn.addEventListener("click", function () {
//   bill.value = "";
//   people.value = "";
//   result.style.visibility = "hidden";
//   total.style.visibility = "hidden";
//   each.style.visibility = "hidden";
// });

function restart() {
  bill.value = "";
  people.value = "";
  result.style.visibility = "hidden";
  total.style.visibility = "hidden";
  each.style.visibility = "hidden";
}
