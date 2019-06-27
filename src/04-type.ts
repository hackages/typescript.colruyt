
/*
  Type
*/

// TODO: implement 'Person' type to type 'paul' variable without using interface

type Person = {
};

const paul: Person = {
  name: "lol",
  age: 19,
  isActive: false
};

/*======================================================================================================*/

function getValueComplete2(obj: { value: boolean }): { valueChanged: number } {
  return { valueChanged: 2 };
}

// TODO: implement the type based on the typing of getValueComplete2 without using an interface
// i.e an 'Value' for { value: boolean } and 'ValueChanged' for { valueChanged: number }

type Value = {
};

type ValueChanged = {
};

function getValueCompleteWithInterface(obj: Value): ValueChanged {
  return { valueChanged: 2 };
}

const testValue = { value: false };

getValueComplete2(testValue);
getValueCompleteWithInterface(testValue); // Why typescript is not complaining ?

/*======================================================================================================*/

// TODO: implement 'Person2' type to match 'paul2' variable type without using an interface

type Person2 = {
};

const paul2: Person2 = {
  getRealAge(a: number): number {
    return a + 10;
  }
};

/*======================================================================================================*/

// TODO: type 'Sum' function  below without using an interface

type Sum = null;

// Uncomment these line to see how to implement it
// const sum: Sum = (a: number, b: number): number => {
//   return a + b;
// };
//
// sum(1, 3);

/*======================================================================================================*/

/*
  Type alias
*/

// TODO: alias 'number' to 'Int' type

type Int = null;

// Uncomment these line to see how to implement it
// function acceptInteger(a: Int): Int {
//   return a + 1;
// }

/*--------------------------------------------------------------------*/


// TODO: alias 'boolean' to 'Bool' type

type Bool = null;


function acceptOnlyTrue(a: Bool): Bool {
  return a;
}

/*--------------------------------------------------------------------*/

// TODO: implement 'StrOrNum' type that is an alias for string or number type

type StrOrNum = null;

// Uncomment these line to see how to implement it
// let strOrNum: StrOrNum;
// strOrNum = 123;
// strOrNum = "123";

export {};

