function calculateTip() {
  var billAmount = document.getElementById("bill_amount").value;
  var serviceQuality = document.getElementById("service_quality").value;
  var peopleCount = document.getElementById("people_count").value;

  var total = billAmount * serviceQuality;
  total = total.toFixed(2);

  var eachBill = total / peopleCount;
  console.log(eachBill);
  eachBill = eachBill.toFixed(2);

  document.getElementById("each_tip").innerHTML = eachBill;
  document.getElementById("total_tip").innerHTML = total;
  if (billAmount == "" || serviceQuality == 0) {
    document.getElementById("bill_amount").style.backgroundColor = "#ffccff";
    document.getElementById("service_quality").style.backgroundColor =
      "#ffccff";
  }
  if ((peopleCount = "")) {
    peopleCount = 1;
    eachBill = total;
  }
}

document.getElementById("calculate_btn").addEventListener("click", function() {
  calculateTip();
});

document.getElementById("reset_btn").onclick = function() {
  document.getElementById("bill_amount").value = "";
  document.getElementById("service_quality").value = 0;
  document.getElementById("people_count").value = "";
  document.getElementById("each_tip").innerHTML = 0;
  document.getElementById("total_tip").innerHTML = 0;

  document.getElementById("bill_amount").style.backgroundColor = "#ffff";
  document.getElementById("service_quality").style.backgroundColor = "#ffff";
};
