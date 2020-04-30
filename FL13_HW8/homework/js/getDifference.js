function isBigger(x, y) {
    return x > y;
}

function getDifference(x, y) {
    if (isBigger(x, y)) {
        return x - y;
    }
    return y - x;
}

getDifference(2, 5);