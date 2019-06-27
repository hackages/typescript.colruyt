/*
  Generic
*/

function getElementRandomlyForNumber(array: number[]): number {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function getElementRandomlyForString(array: string[]): string {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let randomPosition: number = getElementRandomlyForNumber([103, 458, 472, 458]);
let randomPositionStr: string = getElementRandomlyForString([
  "103",
  "458",
  "472",
  "458"
]);

// TODO: let's rewrite the two function in one using generic and without using any

function getElementRandomly<T>(array: T[]): T {
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

let randomPositionGeneric: number = getElementRandomly([103, 458, 472, 458]);
let randomPositionStrGeneric: string = getElementRandomly([
  "103",
  "458",
  "472",
  "458"
]);

/*======================================================================================================*/

// TODO: type 'reverse' function using generic

function reverse<T>(items: T[]): T[] {
  let toReturn: T[] = [];
  for (let i = items.length - 1; i >= 0; i--) {
    toReturn = [...toReturn, items[i]];
  }
  return toReturn;
}

const r1 = reverse([1, 2, 4]);
const r2 = reverse(["1", "2", "lol"]);

r1[0].toPrecision(1);
r2[1].toUpperCase();

/*======================================================================================================*/

/*
  Generic interface
*/

interface CompareFunction<T> {
  (a: T, b: T): number;
}

function compareNumberFn(a: number, b: number) {
  return -1;
}

function compareStrFn(a: string, b: string) {
  return 1;
}

let compareNumber: CompareFunction<number> = compareNumberFn;
let compareStr: CompareFunction<string> = compareStrFn;

/*--------------------------------------------------------------------*/

interface EqualsFunction<T> {
  (a: T, b: T): boolean;
}

function equalNumberFn(a: number, b: number) {
  return a === b;
}

function equalStrFn(a: string, b: string) {
  return a === b;
}

const equalNumber: EqualsFunction<number> = equalNumberFn;
const equalStr: EqualsFunction<string> = equalStrFn;

/*======================================================================================================*/

/*
  Generic class
*/

// TODO: implement 'SingleMap' using generic

class SingleMap<T, U> {
  private key: T;
  private value: U;

  set(key: T, value: U): void {
    this.key = key;
    this.value = value;
  }

  getKey(): T {
    return this.key;
  }

  getValue(): U {
    return this.value;
  }
}

let map = new SingleMap<number, string>();
map.set(1, "Steve");
map.getKey().toExponential(2);

let map2 = new SingleMap<string, string>();
map2.set("LOL", "LOL");

map2.getValue().toUpperCase();

/*======================================================================================================*/

/*
  Generic Constraints
*/

class ET {}

class Human {
  name: string;
}

class Student extends Human {}

class Teacher extends Human {}

// TODO: type 'getName' using generic
function getName<T extends Human>(arg: T): string {
  return arg.name;
}

const student = new Student();
student.name = "student";

const teacher = new Teacher();
teacher.name = "teacher";

getName(student);
getName(teacher);

// TODO: it should give an error when you uncomment
// getName(new ET());



















export {}
