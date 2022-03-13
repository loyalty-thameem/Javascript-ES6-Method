import { capitalizeString } from "./string_function"
const cap = capitalizeString("hello!");

console.log(cap);

// same code for my one file top code not import capitalizeString. 

const capitalizeString1 = str=>str.toUpperCase();
const cap1 = capitalizeString1('World');
console.log(cap1)
