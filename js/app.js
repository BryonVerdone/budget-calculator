const moneyLeft = document.querySelector(".moneyRemaining");
document.querySelector("#submit").addEventListener("click", calculate);

function calculate(e) {
  let income = document.querySelector("#income").value;
  let water = document.querySelectorAll("#water").value;
  let electric = document.querySelectorAll("#electric").value;
  let housing = document.querySelectorAll("#housing").value;
  moneyLeft.innerText = income - (water + electric + housing);
  e.preverntDefault();
}
