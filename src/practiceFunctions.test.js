import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './practiceFunctions.js'; 

test('capitalize the first letter of the string value', () => {
    expect(capitalize('johnny')).toBe('Johnny');
})

test('reverse string of characters', () => {
    expect(reverseString('terry')).toBe('yrret'); 
})

test('Encrypt word', () => {
    expect(caesarCipher('monster', 1)).toBe('npotufs'); 
})

test('Encrypt phrase with non-alphabet characters', () => {
    expect(caesarCipher('abcdef!g', 2)).toBe('cdefgh!i');
})


test('Encrypt phrase with non-alphabet characters and uppercase letters', () => {
    expect(caesarCipher('abcDEf!g', 2)).toBe('cdeFGh!i');
})



test('Encrypt phrase by shifting letters by 32', () => {
    expect(caesarCipher('abcDEf!g', 32)).toBe('ghiJKl!m');
})

test('Add numbers', () => {
    expect(calculator.add(6, 6 )).toBe(12);
})

test('Subtract numbers', () => {
    expect(calculator.substract(11, 6)).toBe(5);
})


test('Divide numbers', () => {
    expect(calculator.divide(12, 6)).toBe(2);
})

test('Multiply numbers', () => {
    expect(calculator.multiply(12, 6)).toBe(72);
})


test('Analyze array', () => {
    expect(analyzeArray([8, 3, 4, 9])).toStrictEqual({average: 6, min: 3, max: 9, length: 4});
})