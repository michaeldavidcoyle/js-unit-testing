function helloWorld() {
    return 'Hello, World!';
}

/*
* Create a function that imitates String.charAt, returns
* the character at the input position
*/
function stringCharAt(string, position) {
    if (typeof string === 'string' && Number.isInteger(position)) {
        if (position >= 0 && position < string.length) {
            return string[position];
        }

        return '';
    }
}

// Create a function that reproduces the output of String.prototype.indexOf
function stringIndexOf(string, searchString) {
    if (typeof string !== 'string') return 0;

    for (var index = 0; index < string.length; index++) {
        if (string[index] === searchString) return index;
    }

    return 0;
}