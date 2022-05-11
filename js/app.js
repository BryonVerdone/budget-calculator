const moneyLeft = document.querySelector(".moneyRemaining");
document.querySelector("#submit").addEventListener("click", calculate);

function calculate() {
  var income = document.querySelector("#income").value;
  var water = document.querySelector("#water").value;
  var electric = document.querySelector("#electric").value;
  var housing = document.querySelector("#housing").value;
  moneyLeft.innerText = +income - (+water + +electric + +housing);
}
