/*
  Type guards
*/

// using typeof
// TODO: type guard the call to .toUpperCase and toPrecision

function upperCaseOrPrecision(val: string | number) {
  if (typeof val === "string") {
    val.toUpperCase();
  }

  if (typeof val === "number") {
    val.toPrecision();
  }
}

upperCaseOrPrecision(1);
upperCaseOrPrecision("ollll");

/*======================================================================================================*/

// using instanceof

class Student {
  age = 123;
  common = "123";
}

class Teacher {
  course = "lol";
  common = "123";
}

function execute(arg: Student | Teacher) {
  if (arg instanceof Student) {
    console.log(arg.age);
  }
  if (arg instanceof Teacher) {
    console.log(arg.course);
  }

  console.log(arg.common);
}

execute(new Student());
execute(new Teacher());

/*======================================================================================================*/

// using literal type

type Increment = {
  type: "increment";
  payload: number;
};
type Set = {
  type: "set";
  payload: string;
};

function reducer(action: Increment | Set) {
  if (action.type === "increment") {
    console.log(action.payload + 1);
  } else {
    console.log(action.payload.toUpperCase());
  }
}

reducer({ type: "increment", payload: 10 });
reducer({ type: "set", payload: "pol" });

/*======================================================================================================*/

// using defined type guards 1

function isNumber(x: any): x is number {
  return typeof x == "number";
}

function show(x: number | string): void {
  if (isNumber(x)) {
    console.log("number value: " + x.toPrecision(3));
  } else {
    console.log("string value: " + x.toLowerCase());
  }
}

show(1.1662277282836);
show("TUIIO");

/*--------------------------------------------------------------------*/

// using defined type guards 2

class Driver {
  drive() {
    console.log("drive");
  }
}

class NonDriver {
  walk() {
    console.log("walk");
  }
}

function hasLicence(human: Driver | NonDriver): human is Driver {
  return (human as Driver).drive != undefined;
}

function move(human: Driver | NonDriver): void {
  if (hasLicence(human)) {
    human.drive();
  } else {
    human.walk();
  }
}

move(new Driver());
move(new NonDriver());

export {};
