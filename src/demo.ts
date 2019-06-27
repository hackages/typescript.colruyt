// demo basic annotations
// demo primitive and array types
// demonstrate protection when you assign other types

// demo basic annotations
// demo primitive and array types
// demonstrate protection when you assign other types

interface Sum {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
  (...args: number[]): number;
}

// Uncomment these line to see how to implement it
const sum: Sum = function(...args: number[]): number {
  console.log(args);
  return 0;
};

sum(1, 2, 3, 4, 89);

interface IUser {
  name: string;
  company: string;
  country: string;
}

const marc: IUser = {
  name: 'Marc',
  company: 'Colruyt',
  country: 'BE'
};

const tina: IUser = {
  ...marc,
  name: 'Tina'
};
console.log(marc);
console.log(tina);

const arr: number[] = [1, 2, 3];
const arr2: number[] = [4, 5, 6];

const arr3: number[] = [...arr2, ...arr, 12, 10, 09]; // spread operator

console.log(arr);
console.log(arr2);
console.log(arr3);

// const first = arr3[0]
// const rest = arr3.slice(1)
// console.log(first)
// console.log(rest)
const [first, ...rest] = arr3;
console.log(first);
console.log(rest);

console.log(arr3.join('/'));

// Type assertion
interface User {
  age: number;
  name: string;
}
const user = {} as User; // so we tell typescript this will be a User
user.age = 123;
user.name = 'hello';

// This line below is bad, because we don't  implement the correctly
const badUser = {} as User; // so we tell typescript this will be a User

function getName(user: User) {
  return user.name;
}

console.log(getName(badUser));

type complexType = string | any[];
function toString(text: complexType): string {
  if (typeof text === 'string') {
    return text;
  }
  return text.join(' ');
}
class What<V> {}

function identity<U>() {}

interface IUtils<V> {
  identity<V>(value: V): V;
}

function map(identity: IUtils<User>) {}

enum Rangers {
  BLUE = 10,
  Green,
  RED
}

function isRed(person: Rangers): boolean {
  return person === 1;
}

console.log('RED', isRed(Rangers.RED));
console.log(Rangers.RED);

enum CodeError {
  VALIDATION_ERROR = 'validation_error',
  UNKNOWN_ERROR = 'unknown_error',
  RATE_LIMIT_ERROR = 'rate_limit_error'
}

// /?\ Uncomment these line, what is the returns of:
console.log(CodeError.VALIDATION_ERROR);
console.log(CodeError['RATE_LIMIT_ERROR']);

const company: { name: string; country: string } = {
  name: 'Colruyt',
  country: 'BE'
};
//   let dynamicValue = 'name';
//   console.log(company[dynamicValue]);
//   dynamicValue = 'country';
//   console.log(company[dynamicValue]);

const RED = 'RED';
const YELLOW = 'Yellow';
const BLACK = 'BLACK';

type colors = 'RED' | 'Yellow' | 'BLACK';

const colorsObj = {
  RED() {
    console.log(RED);
  },
  YELLOW() {
    console.log(YELLOW);
  },
  BLACK() {
    console.log(BLACK);
  }
};

function renderColor(dynamicValue: colors) {
  const handler = colorsObj[dynamicValue];

  handler ? handler() : 'No color found';
}

renderColor('RED');

interface Product {
  price: number;
  name: string;
  barcode: string;
  social: any;
}

const data: Product = {
  price: 12,
  name: 'lemon',
  barcode: 'dfqkmlsfjezifjemlazjf12',
  social: {
    twitter: 'lemon',
    facebook: 'lemon facebook'
  }
};

// const price = data.price;
// const name= data.name;
const name = '';
const {
  name: username,
  price,
  social: { twitter }
} = data;

console.log(username, price, twitter);
const [] = arr3;

function getPrice({ price }: Product) {
  return price;
}

function firstEl([first]: string[]) {
  return first;
}
