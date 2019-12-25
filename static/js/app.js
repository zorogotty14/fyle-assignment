/** calculates price and updates based on pricing policy **/
function calculateCost(serving) {

  var priceLol = serving * 0.5;
  var priceIce = serving * 1;

  var toggle = document.getElementById("planToggle");
  if (toggle.checked == false) {
    // plan is Annual
    console.log("Annual plan is 50% cheaper");
    priceIce /= 2;
    priceLol /= 2;
  }


  document.getElementById("value1").innerHTML = "$" + priceLol;
  document.getElementById("value2").innerHTML = serving;
  document.getElementById("value3").innerHTML = "$" + priceIce;
  document.getElementById("value4").innerHTML = serving;
  document.getElementById("value5").innerHTML = "$" + (-priceLol + priceIce);
}
