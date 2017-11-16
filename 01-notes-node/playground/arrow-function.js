// let square = (x) => {
//   return x**2;
// };

let square = (x) => x**2;

console.log(`x = 5;  ${square(5)}`);


let user = {
  name: 'Lara',
  sayHi: () => {
    console.log(arguments);
    console.log(`Hi. I'm ${this.name}`); // doesn't bind 'this'
  },
  sayHiAlt () {
    console.log(arguments);
    console.log(`Hi Alt. I'm ${this.name}`); // does bind 'this'
  }
};

user.sayHi();
user.sayHiAlt('Some arguments', 12);
