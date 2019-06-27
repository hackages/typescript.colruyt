/*
  Function type
*/

// TODO: type these function below

function add(a, b) {
  return a + b;
}

add(1, 3);

/*--------------------------------------------------------------------*/

// TODO: type these function below with their return type

// Uncomment me
// function getValue(obj) {
//   return obj.value;
// }
//
// getValue({ value: "hello" });

/*--------------------------------------------------------------------*/
// TODO: type these function below with their return type

// Uncomment me
// function method(a, b) {
//   const t = a + b;
//   console.log("t", t);
// }

// method(1, 3);

/*======================================================================================================*/

// TODO: type these function below with their return type

// Uncomment me
// function addComplete(a, b) {
//   return `${a + b}`;
// }

// Uncomment these line to see how to implement it
// addComplete(1, 3);

/*--------------------------------------------------------------------*/

// TODO: type these function below with their return type

// Uncomment me
// function getValueComplete(obj) {
//   return obj.value;
// }

// Uncomment these line to see how to implement it
// getValueComplete({ value: false });

/*======================================================================================================*/

// TODO: type these function below with their return type

// Uncomment me
// function addWithOptional(a, b) {
//   if (b) {
//     return `${a + b}`;
//   }
//
//   return `${a}`;
// }

// Uncomment these line to see how to implement it
// addWithOptional(1);

/*======================================================================================================*/

/*
  Inline annotation for functions
*/

// TODO: type the 'inlineAnnotationAdd' function below with their return type

let inlineAnnotationAdd; // here

// Uncomment these line to see how to implement it
// // /!\ You should touch the code below
// inlineAnnotationAdd = function(a, b) {
//   return a + b;
// };

/*======================================================================================================*/

/*
  Currying
*/

// TODO: type the 'addCurrying' function below with their return type

let addCurrying; // here

// You should not touch the code below
addCurrying = function(a: number) {
  return function(b: number) {
    return a + b;
  };
};

addCurrying(123)(456);

/*======================================================================================================*/

/*
  Function overloading
*/

// TODO: type the 'getUserNameBy' function below using the overload

function padding(
  a: number,
  b?: number,
  c?: number,
  d?: number
): {
  top: number;
  left: number | undefined;
  bottom: number | undefined;
  right: number | undefined;
} {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

padding(1);
padding(1, 1);
padding(1, 1, 1, 1);

// Uncomment this line and it should fail to validate your implementation
// padding(1,1,1);
