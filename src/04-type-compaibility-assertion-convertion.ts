/*
  Type compatibility: determines if one thing can be assigned to another
*/

// everything can be assigned to 'any'

let value: any = 123;
value = true;
value = null;
value = "Hello";

value.toLowerCase();

/*======================================================================================================*/

interface Student {
  name: string;
  age: number;
}

interface Teacher {
  name: string;
  age: number;
  work:string
}

const student: Student = { name:'lol', age:19 };
const teacher: Teacher = { name:'lol3', age:30,work:'teacher' };

function acceptStudent(student: Student) {
}

acceptStudent(student);
acceptStudent(teacher);


interface Point2D { x: number; y: number; }
interface Point3D { x: number; y: number; z: number; }

let iMakePoint2D = (): Point2D => ({ x: 0, y: 0 });
let iMakePoint3D = (): Point3D => ({ x: 0, y: 0, z: 0 });

iMakePoint2D = iMakePoint3D; // Okay
// iMakePoint3D = iMakePoint2D; // ERROR

/*======================================================================================================*/

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


function handleEvent (event: Event) {
  let mouseEvent = event as MouseEvent; // works because MouseEvent is a subtype
}


function handleEventBad (event: Event) {
  // let element = event as HTMLElement; // will never works
  let element = event as any as HTMLElement; // will skip the type checking using any so this is bad

}


export {};
