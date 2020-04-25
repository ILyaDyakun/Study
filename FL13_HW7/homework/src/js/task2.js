let atempt = 4;
let useAtempt = 3;
let power = 2;
let changeMax = 2;
let changePrize = 2;
let start = confirm('Do you want to play a game?');
if (!start) {
    alert('You did not become a millionaire, but can')
} else {
    while(start) {
        let max = 5;
        let prize = 0;
        let maxPrize = 100;
        let cont = true;
        while (cont) {
            let random = Math.floor(Math.random() * (max + 1));
            console.log(random);
            let t = false;
            for (let i = 1; ; i++) {
                let number = +prompt(`Choose a roulette pocket number from 0 to ${max}
                                    Attempts left: ${atempt-i}
                                    Total prize: ${prize}
                                    Possible prize on current attempt: ${Math.floor(maxPrize / Math.pow(power, i-1))}`);
                if (number === random) {
                    prize += Math.floor(maxPrize / Math.pow(power, i - 1));
                    break;
                } else {
                    if (i === useAtempt) {
                        t = true;
                        break;
                    }
                }
            }
            if (t) {
                break;
            }
            cont = confirm(`Congratulation, you won! Your prize is: ${prize}. Do you want to continue?`);
            if (cont) {
                max *= changeMax;
                maxPrize *= changePrize;
            } else {
                break;
            }
        }
        alert(`Thank you for your participation. Your prize is: ${prize}`);
        start = confirm('Do you want to play again?');
    }
}