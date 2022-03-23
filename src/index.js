import _ from 'lodash';

//for watching the html file 
require('./home.html')

//import { sum } from './sum.js';
//import './sum.test.js';
//import './practiceFunctions.test.js';
import { capitalize, reverseString, calculator, caesarCipher, analyzeArray } from './practiceFunctions.js'; 

document.getElementById('reversed').innerHTML = reverseString('terry'); 