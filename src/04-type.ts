/*
  Union Type
*/

// TODO: type 'toString'

function toString(text: string | string[]): string {
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

type SchoolMember = Student | Teacher;

const member1: SchoolMember = {
  course: "Math"
};

const member2: SchoolMember = {
  id: "cool",
  age: 19
};

/*======================================================================================================*/

// TODO: implement all types

type AddTodo = {
  type: "ADD_TODO";
  text: string;
};

type ToggleTodo = {
  type: "TOGGLE_TODO";
  index: number;
};

type Todo = {
  text: string;
  done: boolean;
};

type Action = AddTodo | ToggleTodo;

function todosReducer(state: Todo[] = [], action: Action): Todo[] {
  switch (action.type) {
    case "ADD_TODO":
      // action has type AddTodo here
      return [...state, { text: action.text, done: false }];

    case "TOGGLE_TODO":
      // action has type ToggleTodo here
      return state.map((todo, index) => {
        if (index !== action.index) {
          return todo;
        }

        return {
          text: todo.text,
          done: !todo.done
        };
      });

    default:
      return state;
  }
}

/*======================================================================================================*/


export {};
