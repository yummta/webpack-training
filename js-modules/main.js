import * as operations from './calculator.js';

var a = 54;
var b = 12;

console.log('operations', operations);

console.log( '[ run module ] -> main' );
operations.show([a, b].toString());
console.log( 'adding: ', operations.add(a, b) );
console.log( 'subtracting: ', operations.subtract(a, b) );
