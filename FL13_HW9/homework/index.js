function convert() {
    let result = []; 
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'string') {
            result.push(Number(arguments[i]));
        } else {
            result.push(String(arguments[i]));
        }
    }
    return result;
}

function executeforEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i], i, arr);
    }
}

function mapArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, (elem, index, array) => {
        newArr.push(callback(elem, index, array));
    });
    return newArr;
}

function filterArray(arr, callback) {
    let newArr = [];
    executeforEach(arr, (elem, index, array) => {
        if (callback(elem, index, array)) {
            newArr.push(elem);
        }
    });
    return newArr;
}

function containsValue(arr, value) {
    let isValue = false;
    executeforEach(arr, (elem) => {
        if (elem === value && !isValue) {
            isValue = true;
        }
    });
    return isValue;
}

function flipOver(str) {
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

function makeListFromRange([min, max]) {
    let result = [];
    for (let i = min; i <= max; i++) {
        result.push(i);
    }
    return result;
}

function getArrayOfKeys(arr, key) {
    let result = [];
    executeforEach(arr, (elem) => {
        for (let keyEl in elem) {
            if (keyEl === key) {
                result.push(elem[key]);
            }
        }
    });
    return result;
}

function substitute(arr) {
    const min = 10;
    const max = 20;
    let result = mapArray(arr, elem => {
        if (elem > min && elem < max) {
            elem = '*'
        }
        return elem;
    });
    return result;
}

function getPastDay(date, number) {
    const pastDate = new Date(date);
    pastDate.setDate(date.getDate() - number);
    return pastDate.getDate();
}

function formatDate(date) {
    return `${date.getFullYear()}/${date.getMonth()+1}/${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
}