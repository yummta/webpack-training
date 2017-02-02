import * as operacionSuma from './suma.js';
import * as operacionResta from './resta.js';
import * as operationShow from './show.js';

console.log( '[] -> calculadora ', operacionSuma );

export let sumando = operacionSuma.operacionSuma;
export let restando = operacionResta.operacionResta;
export let showing = operationShow.operationShow;
