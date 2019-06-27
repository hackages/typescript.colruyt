/*
  Intersection Types
*/

// TODO: create 'Human' type that has all properties of 'Student' and 'Worker' type

type Student = {
  id: string;
  age: number;
};

type Worker = {
  company: string;
};

type Human = null;

const human: Human = {
  id: "looll",
  age: 9,
  company: "endgame"
};

// /?\ This works also with interface

/*======================================================================================================*/

// TODO: fix the 'User' type using an intersection

type UserWithoutId = {
  age: number;
};

type User = UserWithoutId ;

// Uncomment these line to see the error and fix it

// const us: User = {
//   age: 19
// };
//
// const us1: User = {
//   id: 1,
//   age: 19
// };

/*======================================================================================================*/

export {};
