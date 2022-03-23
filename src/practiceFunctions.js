export const capitalize = word => {
    var capitalized = word; 
    if (capitalized.length !== 0) {
        return capitalized[0].toUpperCase() + capitalized.slice(1); 
    }
}

export const reverseString = word => {
    var reversed = '';  
    if (word.length != 0) {
        for (var i = word.length; i >= 0; i--) {
            reversed = reversed + word.charAt(i); 
        }
    }
    return reversed; 
}

export const calculator = {
    add(a, b) { return a + b}, 
    substract(a, b) { return a - b },
    divide(a, b) { return a / b },
    multiply(a, b) { return a * b; },
}

const alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]; 
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
export const caesarCipher = (val, shift) => {
    var encrypted = ''; 
    if (val.length !== 0) {
        for (var i = 0; i < val.length; i++) {
            if ((/[a-zA-Z]/).test(val[i])) {
                if (lowercase.some(letter => letter === val[i])) {
                    var ind = lowercase.indexOf(val[i])
                    if ((ind + (shift%26)) === 26) {
                        encrypted += lowercase[0];
                    }
                    else {
                        encrypted += lowercase[ind + (shift%26)];
                    }
                }
                else if (uppercase.some(letter => letter === val[i])) {
                    var ind = uppercase.indexOf(val[i])
                    if ((ind + (shift % 26)) === 26) {
                        encrypted += uppercase[0];
                    }
                    else {
                        encrypted += uppercase[ind + (shift % 26)];
                    }
                }
            }
            else {
                encrypted += val[i]; 
            }
           
        }
    }
    return encrypted; 
}


export const analyzeArray = arr => {
    var avg = 0; 
    var minimum = 0; 
    var maximum = 0;
    if (arr.length === 0) {
        return;
    }

    minimum = arr[0]; 
    maximum = arr[0]; 
    for (var i = 0; i < arr.length; i++) {
        //average; 
        avg += arr[i]; 
        //minimum; 
        for (var j = i + 1; j < arr.length; j++) {
            if (minimum > arr[j]) {
                minimum = arr[j]; 
            }
            if (maximum < arr[j]) {
                maximum = arr[j]
            }
        }
    }
    avg /= arr.length; 
    const object = {
        average: avg,
        min: minimum, 
        max: maximum, 
        length: arr.length, 
    }
    return object; 
}

