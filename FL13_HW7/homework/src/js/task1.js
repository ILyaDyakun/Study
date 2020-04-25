const login = prompt('Input your login', '');
const minLength = 4;
const hours = 20;
if (login === '' || login === null) {
    alert('Canceled');
} else if (login.length < minLength) {
    alert(`I don't know any users having name length less than 4 symbols`);
} else if (login !== 'User' && login !== 'Admin') {
    alert(`I don't know you`);
} else {
    const password = prompt('Input your password', '');
    if (password === '' || password === null) {
        alert('Canceled');
    } else if (login === 'User' && password !== 'UserPass' ||
               login === 'Admin' && password !== 'RootPass') {
        alert('Wrong password');
    } else {
        const currentHours = new Date().getHours();
        if (login === 'User' && currentHours < hours) {
            alert('Good day, dear User!');
        } else if (login === 'User' && currentHours >= hours) {
            alert('Good evening, dear User!');
        } else if (login === 'Admin' && currentHours < hours) {
            alert('Good day, dear Admin!');
        } else if (login === 'Admin' && currentHours >= hours) {
            alert('Good evening, dear Admin!');
        }
    }
}
