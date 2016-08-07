import {Person} from './';
import './index.css';

window.onload = main;

declare function require(name: string): any;

function main() {
  // TODO Import css.
  let {version} = require('../package.json');
  let person = new Person('Someone', 1000);
  document.body.innerText =
    `Hello, ${person.name}! You are ${person.age} years old! (v${version})`;
}
