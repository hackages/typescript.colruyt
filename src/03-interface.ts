/*
  Type
*/

// TODO: implement 'Person' interface to type 'paul' variable

interface Person {
  name: string;
  age: number;
  isActive: boolean;
}

const paul: Person = {
  name: "lol",
  age: 19,
  isActive: false
};

/*======================================================================================================*/

function getValueComplete2(obj: { value: boolean }): { valueChanged: number } {
  return { valueChanged: 2 };
}

// TODO: create the interfaces based on the typing of getValueComplete2
// i.e an 'Value' interface for { value: boolean } and 'ValueChanged' interface for { valueChanged: number }

interface Value {
  value: boolean;
}

interface ValueChanged {
  valueChanged: number;
}

function getValueCompleteWithInterface(obj: Value): ValueChanged {
  return { valueChanged: 2 };
}

const testValue = { value: false };
getValueComplete2(testValue);
getValueCompleteWithInterface(testValue); // Why typescript is not complaining ?

/*======================================================================================================*/

// TODO: implement 'Person2' interface  to match 'paul2' variable type

interface Person2 {
  getRealAge(a: number): number;
}

const paul2: Person2 = {
  getRealAge(a: number): number {
    return a + 10;
  }
};

/*======================================================================================================*/

// TODO: type the function 'sum' below using an interface

interface Sum {
  (a: number, b: number): number;
}

const sum: Sum = (a: number, b: number): number => {
  return a + b;
};

sum(1, 3);

/*======================================================================================================*/

/*
  Classes as types
*/

// TODO: implement the 'User' class to type user1 & user2 variables

class User {
  name: string;
  age: number;
  isValid?: boolean;
}

const user1: User = {
  name: "kal",
  age: 100,
  isValid: false
};

const user2: User = {
  name: "user2",
  age: 100
};

/*======================================================================================================*/

/*
  Classes can implement interfaces
*/

// TODO: implement the 'Transporter' interface for Taxi and CityBus
//  Taxi getPrice should return 100
//  CityBus getPrice should return 75

interface Transporter {
  getPrice(): number;
}

class Taxi implements Transporter {
  getPrice(): number {
    return 100;
  }
}

class CityBus implements Transporter {
  getPrice(): number {
    return 75;
  }
}

function calculate(vehicule: Transporter): string {
  return "Price is=" + vehicule.getPrice();
}

// Uncomment this code, when you have finished, everything should work
// calculate(new Taxi());
// calculate(new CityBus());
