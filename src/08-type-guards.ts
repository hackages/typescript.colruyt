/*
  Type guards
*/

// using typeof
// TODO: type guard the call to .toUpperCase and toPrecision

function upperCaseOrPrecision(val: string | number) {
  // TODO: Uncomment these line, write the guard to make them working
  // val.toUpperCase();
  // val.toPrecision();
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
  // TODO: Uncomment these line, write the guard to make them working
  // console.log(arg.age);
  // console.log(arg.course);

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
  // TODO: Uncomment these line, write the guard to make them working
  // console.log(action.payload + 1);
  // console.log(action.payload.toUpperCase());
}

reducer({ type: "increment", payload: 10 });
reducer({ type: "set", payload: "pol" });

/*======================================================================================================*/

// using defined type guards 1

// TODO: implement isNumber type guard to check if human is a Driver
function isNumber(x: any) {}

// Uncomment this line to check if your type is working
// function show(x: number | string): void {
//   if (isNumber(x)) {
//     console.log("number value: " + x.toPrecision(3));
//   } else {
//     console.log("string value: " + x.toLowerCase());
//   }
// }
//
// show(1.1662277282836);
// show("TUIIO");

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

// TODO: implement hasLicence type guard to check if human is a Driver
function hasLicence(human: Driver | NonDriver) {}

// Uncomment this line to check if your type is working
// function move(human: Driver | NonDriver): void {
//   if (hasLicence(human)) {
//     human.drive();
//   } else {
//     human.walk();
//   }
// }
//
// move(new Driver());
// move(new NonDriver());

export {};
