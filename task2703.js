var argumentsLength = function(...args) {
    let count = 0;
    while(args[count++] !== undefined){}
    return count-1;
};
