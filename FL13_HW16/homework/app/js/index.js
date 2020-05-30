const baseUrl = 'http://localhost:3000';
const appContainer = document.getElementById('app-container');
let users;
createElement('h1', appContainer, null, 'Manage User App');
const loader = createElement('div', appContainer, 'loader', 'Loading...');
loader.setAttribute('id', 'loader');
const addNewUserSection = createElement('div', appContainer, 'add-new-user');
addNewUserSection.setAttribute('id', 'add-new-user-section')
const userList = createElement('div', appContainer, 'list');
userList.setAttribute('id', 'user-list');

function renderAddNewUserSection() {
    const addNewUserContainer = document.getElementById('add-new-user-section');

    const nameInput = createElement('input', addNewUserContainer, 'input');
    nameInput.setAttribute('placeholder', 'Name');

    const fullNameInput = createElement('input', addNewUserContainer, 'input');
    fullNameInput.setAttribute('placeholder', 'Full Name');

    const addNewUserButton = createElement('button', addNewUserContainer, 'button', 'Add New User');
    addNewUserButton.addEventListener('click', () => {
        addNewUser(fullNameInput.value, nameInput.value);
        fullNameInput.value = '';
        nameInput.value = '';
    });
}

function renderUserList() {
    const list = document.getElementById('user-list');
    list.innerHTML = '';
    users.forEach((user) => {
        const userItem = createElement('div', list, 'user-item');

        createElement('span', userItem, 'field', user.id);

        const fullNameField = createElement('input', userItem, 'field');
        fullNameField.value = user.name;

        const nameField = createElement('input', userItem, 'field');
        nameField.value = user.username;

        const updateButton = createElement('button', userItem, 'button', 'Update');
        updateButton.addEventListener('click', () => {
            updateUser(user.id, fullNameField.value, nameField.value);
        });

        const deleteButton = createElement('button', userItem, 'button', 'Delete');
        deleteButton.addEventListener('click', () => {
            deleteUser(user.id);
        });


    });
}

function getUsers() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', baseUrl + '/users');
    xhr.send();
    const successStatus = 200;
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === successStatus) {
            users = JSON.parse(xhr.response);
            renderUserList();
            setLoaderVisibility(false);
        }
    }
}

function updateUser(id, fullName, name) {
    setLoaderVisibility(true);
    const xhr = new XMLHttpRequest();
    const url = baseUrl + '/users/' + id;
    const body = {
        name: fullName,
        username: name
    };
    xhr.open('PUT', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
    const successStatus = 204;
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === successStatus) {
            getUsers();
        }
    }
}

function deleteUser(id) {
    setLoaderVisibility(true);
    const xhr = new XMLHttpRequest();
    const url = baseUrl + '/users/' + id;
    xhr.open('DELETE', url);
    xhr.setRequestHeader('Authorization', 'admin');
    xhr.send();
    const successStatus = 204;
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === successStatus) {
            getUsers();
        }
    }
}

function addNewUser(fullName, name) {
    setLoaderVisibility(true);
    const xhr = new XMLHttpRequest();
    const url = baseUrl + '/users';
    const body = {
        name: fullName,
        username: name
    };
    xhr.open('POST', url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(body));
    const successStatus = 201;
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === successStatus) {
            getUsers();
        }
    }
}

function createElement(tag, parent, className, innerText){
    const element = document.createElement(tag);
    if(className){
        element.classList.add(className);
    }
    if (innerText) {
        element.innerText = innerText;
    }
    parent.appendChild(element);
    return element;
}

function setLoaderVisibility(show) {
    const loader = document.getElementById('loader');
    loader.style.display = show ? 'block': 'none';
}

window.onload = () => {
    renderAddNewUserSection();
    getUsers();
};