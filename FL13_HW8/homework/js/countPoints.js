function isBigger(x, y) {
    return x > y;
}

function countPoints(arr) {
    let count = 0;
    let doubleArr = [];
    for (let i = 0; i < arr.length; i++) {
        doubleArr[i] = arr[i].split(':');
    }
    for (let i = 0; i < doubleArr.length; i++) {
        if (isBigger(doubleArr[i][0], doubleArr[i][1])) {
            count += 3;
        } else if (doubleArr[i][1] === doubleArr[i][0]) {
            count += 1;
        } 
    }
    return count;
}

countPoints(['3:1', '1:0', '0:0', '1:2', '4:0', '2:3', '1:1', '0:1', '2:1', '1:0']);