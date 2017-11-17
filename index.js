const OperClass = require("./op.js");

var op = new OperClass(12);

op.Add("a");

op.Minus(10);

var externalDoop = ::op.Doop;

externalDoop((acc,val)=>acc*val, 100);

console.log(""+op);
console.log(`[HasLogger]: ${op.hasLogger}`);