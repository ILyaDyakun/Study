function assign(target) {
    const result = Object(target);

    for (let index = 1; index < arguments.length; index++) {
        const source = arguments[index];

        if (source !== null && source !== undefined) {
            for (let key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    result[key] = source[key];
                }
            }
        }
    }
    return result;
}