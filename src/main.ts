import {Person} from './';
import './index.css';

window.onload = main;

// There's probably a better place for this declaration.
declare function require(name: string): any;

function main() {
  // Importing package.json embeds the whole thing, including script info.
  // That's probably okay and even good for open source, if it's not too big,
  // but perhaps closed-source software might prefer not to expose all that
  // metadata.
  // Also, I use require here instead of importing up top because VSCode
  // doesn't know how to make sense of it.
  let {version} = require('../package.json');
  let person = new Person('Someone', 1000);
  document.body.innerText =
    `Hello, ${person.name}! You are ${person.age} years old! (v${version})`;
}
