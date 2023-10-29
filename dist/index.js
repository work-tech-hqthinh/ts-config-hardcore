var _a;
import dynamicFunc from "#dynamic/index.js";
const myLargeNumber = 123456789;
console.log(myLargeNumber);
const x = {
    a: 1, b: 2, c: 3,
};
const y = (_a = Object.assign({}, x)) !== null && _a !== void 0 ? _a : '100';
console.log(y);
const t = [1, 2, 3, 4];
const myFunc = () => {
    return 123;
};
console.log("VALUE A IS: ", dynamicFunc.a);
export default {
    t, x, myFunc, dynamicFunc
};
// console.log(t.at(2));
// Target will downgrade new syntax to old syntax}
