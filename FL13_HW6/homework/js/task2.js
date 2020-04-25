let str = prompt('Input a word', '');
let t = false;
const two = 2;

for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') {
        t = true;
    }
}

if (t || str === '') {
    alert('Invalid value');
} else if (str.length % two === 1) {
    alert(str[(str.length - 1) / two]);
} else {
    alert(str[str.length / two - 1] + str[str.length / two]);
}