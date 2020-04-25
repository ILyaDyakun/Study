let check = +prompt('input check number', 0);
let tip = +prompt('input tip percentage', 0);
const hundred = 100;
const minPer = 0;
const maxPer = 100;
if (!isNaN(check) && !isNaN(tip) && check >= 0 && tip >= minPer && tip <= maxPer) {
    let tipAmount = tip * check / hundred;
    let sum = check + tipAmount;
    alert(`Check number: ${check}
Tip: ${tip}%
Tip amount: ${tipAmount}
Total sum to pay: ${sum}`);
} else {
    alert('Invalid input data');
}