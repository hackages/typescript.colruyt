/*
  Basic Annotations
*/

// we annotate the type after the variable name
const sample: number = 123;

/*======================================================================================================*/

/*
  Primitive types
*/

// TODO: type these variables below

const num: number = 13;
const num2: number = 13.1;
const str: string = "lol";
const trueValue: boolean = true;
const falseValue: boolean = false;

// /?\ what will happen if I assign to 'realTrueValue' to false
let realTrueValue: true;

// /?\ what will happen if I assign to 'realFalseValue' to true
let realFalseValue: false;

/*======================================================================================================*/

/*
  Arrays types
*/

// TODO: type these variables below

const numArray: number[] = [13, 13.1, 14];
const strArray: string[] = ["lol", "pol", "pol", "pol"];
const boolArray: boolean[] = [true, false, true, false];

/*======================================================================================================*/

/*
  Tuple types
*/

// TODO: type these variables below

let tuple: [string, number] = ["Jenny", 8675309]; // enforce that we have only 2 value
let triple: [number, number, number] = [1, 0, 1]; // enforce that we have only 3 value

// Uncomment these two line to validate your type, they should be in error
// tuple = ["Jenny", 8675309, "222"];
// triple = [8675309, 8675309];

/*======================================================================================================*/

/*
  Object types
*/

// TODO: type these variables below

let user: {
  first: string;
  last: string;
} = {
  first: "John",
  last: "Doe"
};

const company: {
  members: string[];
  isActive: boolean;
} = {
  members: ["John", "Paul"],
  isActive: false
};

// /?\ Uncomment the lines below, they should be in error
// user = {name:'paul'}
// company.foo=false
// company.members='Paul'

/*======================================================================================================*/

/*
  Inference types
*/

// For basic type, you don't need to make the type explicit if you assign it directly

let foo = 123;
let bar = "Hello";
let lol = {
  accent: "hahah"
};

// /?\ Uncomment the lines below,they should be in error
// foo = false;
// bar = false;
// lol = { name: "paul" };

/*======================================================================================================*/

/*
  Special types
*/

// TODO: type these variables below

let iAmJavascript: any;

iAmJavascript = "123";
iAmJavascript = 123;
iAmJavascript = null;
iAmJavascript = undefined;
iAmJavascript = ["lll", "mmmm", true, 12333];
iAmJavascript = { lol: true };

iAmJavascript.lol = 3;
iAmJavascript = iAmJavascript + 123;
iAmJavascript = iAmJavascript + null;
iAmJavascript = iAmJavascript + undefined;

/*--------------------------------------------------------------------*/

let maybeNumber: number = 3;
let maybeStr: string = "pol";

// Uncomment these two line, why this is not working ?
// maybeNumber = null;
// maybeStr = undefined;

// /?\ TODO: call the instructor to discuss about it

/*--------------------------------------------------------------------*/

// TODO: type these variables below without using 'any'

let iAmAnySpecial: unknown;

iAmAnySpecial = "123";
iAmAnySpecial = 123;
iAmAnySpecial = null;
iAmAnySpecial = undefined;
iAmAnySpecial = ["lll", "mmmm", true, 12333];
iAmAnySpecial = { lol: true };

// TODO: uncomment the code below,  why this is not working ?
// iAmAnySpecial = iAmAnySpecial + 123;
// iAmAnySpecial = iAmAnySpecial + null;
// iAmAnySpecial = iAmAnySpecial + undefined;
// iAmAnySpecial.lol = 3;
