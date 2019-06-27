
/*
  Union Type
*/

// TODO: type 'toString'

function toString(text) {
  if (typeof text === "string") {
    return text;
  }
  return text.join(" ");
}

toString("lol");
toString(["lol", "llll"]);

/*======================================================================================================*/

// TODO: implement 'SchoolMember' type that is an union of 'Student' and 'Teacher'

interface Student {
  id: string;
  age: number;
}

interface Teacher {
  course: string;
}

type SchoolMember = null;

// Uncomment these line to see how to implement it
// const member1: SchoolMember = {
//   course: "Math"
// };
//
// const member2: SchoolMember = {
//   id: "cool",
//   age: 19
// };


/*======================================================================================================*/


export {};
