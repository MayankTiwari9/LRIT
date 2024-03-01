// toexponential()
let y = 9.656;
console.log("toExponential");

let y1 = y.toExponential(2);
console.log(y1); // 9.66e+0

let y2 = y.toExponential(4);
console.log(y2); // 9.6560e+0

let y3 = y.toExponential(6);
console.log(y3); // 9.656000e+0


//toPrecision()
let x = 9.656;
console.log("toPrecision");

let x1 = x.toPrecision();
console.log(x1); // 9.656

let x2 = x.toPrecision(2);
console.log(x2); // 9.7

let x3 = x.toPrecision(4);
console.log(x3); // 9.656

let x4 = x.toPrecision(6);
console.log(x4); // 9.65600
