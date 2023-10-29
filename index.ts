
import dynamicFunc from "#dynamic/index.js";

const myLargeNumber = 123_456_789;
console.log(myLargeNumber);

const x = {
    a: 1, b: 2, c: 3,
} as const;

const y = { ...x } ?? '100';

console.log(y);

const t = [1, 2, 3, 4];

const myFunc = () => {
    return 123;
}

console.log("VALUE A IS: ", dynamicFunc.a);

export default {
    t, x, myFunc, dynamicFunc
}
// console.log(t.at(2));

// Target will downgrade new syntax to old syntax}

