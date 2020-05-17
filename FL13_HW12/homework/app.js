const root = document.getElementById('root');
let books;

const leftSection = createNewElement('div', root, 'section', null);
leftSection.setAttribute('id', 'left-section');

const rightSection = createNewElement('div', root, 'section', null);
rightSection.setAttribute('id', 'right-section');

function renderLeftSection(books) {
    const leftSection = document.getElementById('left-section');
    leftSection.innerHTML = '';

    const list = createNewElement('ul', leftSection, 'list', null);
    books.forEach(function(book) {
        renderBookItem(book, list);
    });

    const addButton = createNewElement('button', leftSection, 'add-button', 'add');
    addButton.addEventListener('click', function(){
        const previewURL = new URL(window.location.origin + window.location.pathname);
        previewURL.hash = 'add';
        window.location.href = previewURL.href;
    });
}

function renderRightSection(books)  {
    const currentUrl = new URL(window.location.href);
    if (currentUrl.hash === '#preview'){
        const currentId = currentUrl.searchParams.get('id');
        const book = getBookByUid(currentId);
        renderBookPreview(book);
    } else if (currentUrl.hash === '#edit') {
        const currentId = currentUrl.searchParams.get('id');
        const book = getBookByUid(currentId);
        renderBookEditor(book);
    } else if (currentUrl.hash === '#add') {
        const newBookItem = createNewBookItem();
        renderBookEditor(newBookItem);
    } else {
        const rightSection = document.getElementById('right-section');
        rightSection.innerHTML = '';
    }
}


window.onload = function () {
    books = JSON.parse(localStorage.getItem('books'));
    renderLeftSection(books);
    renderRightSection(books);
}

function renderBookPreview(book) {
    const rightSection = document.getElementById('right-section');
    rightSection.innerHTML = '';

    const preview = createNewElement('div', rightSection, 'preview', null);

    const name = createNewElement('h3', preview, 'name', book.name);

    const author = createNewElement('h4', preview, 'author', book.author);

    const image = createNewElement('img', preview, 'image', null);
    image.setAttribute('src', book.image);

    const plot = createNewElement('p', preview, 'plot', book.plot);
}

function renderBookItem(book, parent) {
    const listItem = createNewElement('li', parent, 'list-item', null);

    const title = createNewElement('span', listItem, 'title', book.name);
    title.addEventListener('click', function(event){
        const previewURL = new URL(window.location.origin + window.location.pathname);
        previewURL.searchParams.append('id', book.uid);
        previewURL.hash = 'preview';
        window.location.href = previewURL.href;
    });

    const editButton = createNewElement('button', listItem, 'edit-button', 'edit');
    editButton.addEventListener('click', function(){
        const previewURL = new URL(window.location.origin + window.location.pathname);
        previewURL.searchParams.append('id', book.uid);
        previewURL.hash = 'edit';
        window.location.href = previewURL.href;
    });
}

function renderBookEditor(book) {
    const rightSection = document.getElementById('right-section');
    rightSection.innerHTML = '';

    const editor = createNewElement('div', rightSection, 'editor', null);

    createNewElement('span', editor, 'label', 'Name:');

    const nameInput = createNewElement('input', editor, 'input', null);
    nameInput.value = book.name;

    createNewElement('span', editor, 'label', 'Author:');

    const authorInput = createNewElement('input', editor, 'input', null);
    authorInput.value = book.author;

    createNewElement('span', editor, 'label', 'Image:');

    const imageInput = createNewElement('input', editor, 'input', null);
    imageInput.value = book.image;

    createNewElement('span', editor, 'label', 'Plot:');

    const plotInput = createNewElement('input', editor, 'input', null);
    plotInput.value = book.plot;

    const buttons = createNewElement('div', editor, 'buttons', null);

    const cancelButton = createNewElement('button', buttons, 'cancel-button', 'Cancel');
    cancelButton.addEventListener('click', function(){
        const discard = confirm('Discard changes?');
        if (discard) {
            window.history.back();
        }
    });

    const saveButton = createNewElement('button', buttons, 'save-button', 'Save');
    saveButton.addEventListener('click', function() {
       if (nameInput.value && authorInput.value && imageInput.value && plotInput.value) {
           book.name = nameInput.value;
           book.author = authorInput.value;
           book.image = imageInput.value;
           book.plot = plotInput.value;
           saveChanges(book);
       } else {
           alert('Please fill all inputs.')
       }
    });
}

function saveChanges(book) {
    let existingBook = books.find(function(bookItem) {
        return bookItem.uid === book.uid;
    });
    if (!existingBook) {
        books.push(book);
    } else {
        existingBook = book;
    }
    localStorage.setItem('books', JSON.stringify(books));
    window.location.href = window.location.origin + window.location.pathname;
}

function createNewElement(tag , parent, className, innerText) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (innerText) {
        element.innerText = innerText;
    }
    parent.appendChild(element);
    return element;
}

function createNewBookItem() {
    return {
        name: '',
        author: '',
        image: '',
        plot: '',
        uid: createNewUid()
    }
}

function createNewUid() {
    const uids = books.map(function (book) {
        return Number(book.uid);
    });
    return (Math.max(...uids) + 1).toString();
}

function getBookByUid(uid) {
    return books.find(function(bookElement){
        return bookElement.uid === uid;
    });
}
