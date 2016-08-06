import {Person} from './';

window.onload = main;

function main() {
  let person = new Person('Someone', 1000);
  document.body.innerText =
    `Hello, ${person.name}! You are ${person.age} years old!`;
}
