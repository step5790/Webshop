var totalStorage = localStorage.getItem("totalStorage");

var price = parseFloat(totalStorage.replace("DKK", ""));

var staticNum = 74;
var sum = price + staticNum;

document.querySelector(".result").innerText = totalStorage;
document.querySelector(".totalAmount").innerText = "DKK" + " " + sum;

console.log(sum);
