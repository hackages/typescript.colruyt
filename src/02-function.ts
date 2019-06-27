/*
  Function type
*/

// TODO: type the functions below

function add(a: number, b: number) {
  return a + b;
}

add(1, 3);

/*--------------------------------------------------------------------*/

function getValue(obj: { value: string }) {
  return obj.value;
}

getValue({ value: 'hello' });

/*--------------------------------------------------------------------*/

function method(a: number, b: number): void {
  const t = a + b;
  console.log('t', t);
}

method(1, 3);

/*======================================================================================================*/

// TODO: type these function below with their return type

function addComplete(a: number, b: number): string {
  return `${a + b}`;
}

addComplete(1, 3);

/*--------------------------------------------------------------------*/

function getValueComplete(obj: { value: boolean }): boolean {
  return obj.value;
}

getValueComplete({ value: false });

/*======================================================================================================*/

// TODO: type these function below with their return type

function addWithOptional(a: number, b?: number): string {
  if (b) {
    return `${a + b}`;
  }

  return `${a}`;
}

addWithOptional(1);

/*======================================================================================================*/

/*
  Inline annotation for functions
*/

// TODO: type the 'inlineAnnotationAdd' function below with their return type

let inlineAnnotationAdd: (a: number, b: number) => number; // here

// /!\ You should touch the code below
inlineAnnotationAdd = function(a, b) {
  return a + b;
};

/*======================================================================================================*/

/*
  Currying
*/

// TODO: type the 'addCurrying' function below with their return type

let addCurrying: (a: number) => (b: number) => number; // here

// You should touch the code below
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
  all: number
): {
  top: number;
  left: number | undefined;
  bottom: number | undefined;
  right: number | undefined;
};
function padding(
  topAndBottom: number,
  leftAndRight: number
): {
  top: number;
  left: number | undefined;
  bottom: number | undefined;
  right: number | undefined;
};
function padding(
  top: number,
  right: number,
  bottom: number,
  left: number
): {
  top: number;
  left: number | undefined;
  bottom: number | undefined;
  right: number | undefined;
};
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
