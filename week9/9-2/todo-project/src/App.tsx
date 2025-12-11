// import './App.css'

// function App() {

//   return (
//     <>
//     <Todo
//       title='hehehhe'
//       description="hiiii"
//       done={false}
//     />
//     </>
//   )
// }

// interface Todoprop{
//   title:string,
//   description: string,
//   done: boolean
// }

// function Todo(props : Todoprop) {
//   return <div>
//     <h1>
//       {props.title}
//     </h1>
//     <h2>
//       {props.description}
//     </h2>
//     <h3>
//       {props.done}
//     </h3>
//   </div>
// }

// export default App




//implementing interfaces

// interface Person {
//   name: string,
//   age: number,
//   greet(phrase: string): void;
// }

// class Employee implements Person {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age= a;
//   }

//   greet(phrase: string): void {
//       console.log(`${phrase} ${this.name}`)
//   }
// }





// Unions types

// type greetArg = number | string

// function greet(id: greetArg) {

// }
// greet(1);
// greet("1");





//intersection-interfaces

type Employee = {
  name: string;
  startdate: number;
}

interface Manager {
  name: string;
  department: string;
}

type TechHEAD = Employee | Manager;

const t: TechHEAD = {
  name: "heheh",
  startdate: 22,
  department: "cse"
}