let check = prompt('input check number', 0);
let tip = prompt('input tip percentage', 0);
const hundred = 100;
const minPer = 0;
const maxPer = 100;
if (!isNaN(parseFloat(check)) && isFinite(check) && !isNaN(parseFloat(tip)) && isFinite(tip) 
&& check >= 0 && tip >= minPer && tip <= maxPer) {
    let tipAmount = tip * check / hundred;
    let sum = +check + tipAmount;
    alert(`Check number: ${Math.trunc(check * hundred) / hundred}
Tip: ${Math.trunc(tip * hundred) / hundred}%
Tip amount: ${Math.trunc(tipAmount * hundred) / hundred}
Total sum to pay: ${Math.trunc(sum * hundred) / hundred}`);
} else {
    alert('Invalid input data');
}