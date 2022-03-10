// * Q1. How can we create a very basic UI in index.js using React?
// * Q2. How can we "talk" to index.html, to display the UI we create using React?

// * First, we will run "npm install" to install all the dependencies React needs.
// Usually, we will not include the node_modules folder in GitHub repos, because it can be quite large.
// Using "npm install" in a local repo will find all the dependencies the project needs (using package.json)...
// ... and then install them all in your local repo!

// =================================================

// * 1. What is JSX?

// JSX is a syntax extension of JavaScript.
// It allows us to write "HTML-like" elements in React (using JS code), which can then be "translated" into normal HTML.
// JSX is faster than regular JS
// It allows us to put HTML in the DOM using JS without using document.createElement() or appendChild().

// Import React so we can use JSX in "index.js".
import React from "react";
// Import ReactDOM to "translate" our JSX code into HTML and "give" it to "index.html"
import ReactDOM from "react-dom";

// Get a reference to the HTML "root" element
const root = document.querySelector("#root");

// * Part 1 - Basic JSX

// ? Note: we can also use JS variables in our JSX
// By putting the variable between curly braces { }
// let endOfSentence = "world!!";

// ? Create some JSX and assign it to a variable
// let jsxDiv = (
// 	<div>Hello {endOfSentence}</div>
// );

// ===================================================

// * Part 2 - JSX Extras:
// 1. We can reference object properties inside JSX elements inside curly braces { }
// 2. We must use "className" when giving JSX elements a class, NOT "class"
// 3. It is possible to use inline styles for JSX elements - HOWEVER:
//	  A. We have to use an OBJECT to contain the styles we want
//    B. This object lives inside a pair of curly braces --> { { border: "2px solid" }  }
//    C. For properties like "background color", we have to use camel case in JSX: "backgroundColor" NOT "background-color".

// const person = {
// 	firstName: "David",
// 	age: 24,
// 	location: "Göttingen"
// }

// const output = (
// 	<div className="container" style={ { border: "2px solid", color: "red", backgroundColor: "yellow" } }>
// 		<h1 className="firstName">The person's first name is { person.firstName }</h1>
// 		<h2 className="age">The person's age is { person.age }</h2>
// 		<h3 className="location">The person's location is { person.location }</h3>
// 	</div>
// );

// ===================================================

// * Part 3 - Arrays and JSX

// With JSX, we can also create ARRAYS of elements.
// For example, if we have an array of <li> elements, we can include all of them in our JSX at the same time...

// Array containing 4x JSX <li> elements
const singersArray = [
	<li>Freddy Mercury</li>,
	<li>Joanna Newsom</li>,
	<li>Thom Yorke</li>,
	<li>Britney Spears</li>
]

let content = <ul>{ singersArray }</ul>;

// ReactDOM.render() is the "gateway" from index.js to index.html
// It takes two arguments:
// * 1. What JSX we want to render in HTML
// * 2. Where we want to render it
//              what    where
ReactDOM.render(content, root);
// ReactDOM.render(jsxDiv, document.querySelector("#root"));