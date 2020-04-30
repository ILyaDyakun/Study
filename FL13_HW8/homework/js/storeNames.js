function storeNames() {
    let result = [];
    for(let i = 0; i < arguments.length; i++) {
        result[i] = arguments[i];
    }
    return result;
}

storeNames('Nick Fury', 'Iron Man', 'Doctor Strange');