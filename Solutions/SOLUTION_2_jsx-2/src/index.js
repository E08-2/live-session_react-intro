import React from "react"; //Main React.js library
import ReactDOM from "react-dom"; // We use ReactDOM to render into the DOM

const data = {
	image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg/800px-Bob_Dylan_-_Azkena_Rock_Festival_2010_2.jpg",
	cardTitle: "Bob Dylan",
	cardDescription:
		"Bob Dylan (born Robert Allen Zimmerman - May 24, 1941) is an American singer-songwriter, author, and artist who has been an influential figure in popular music and culture for more than five decades.",
	button: {
		url: "https://en.wikipedia.org/wiki/Bob_Dylan",
		label: "Go to wikipedia"
	}
};

// 1. Define the variable 'content' below, and fill it with the needed code to render the bootstrap card
const content = (
	<div className="card m-5" style={ { width: "18rem" } }>
		<img className="card-img-top" src={data.image} alt="Card image cap" />
		<div className="card-body">
			<h5 className="card-title">{ data.cardTitle }</h5>
			<p className="card-text">{ data.cardDescription }</p>
			<a href={ data.button.url } class="btn btn-primary">{ data.button.label }</a>
		</div>
	</div>
);

// 2. Then render the content using ReactDOM.render(). 
// Remember you need to say WHAT to render, followed by WHERE in index.html to render it.
const root = document.querySelector("#root");

//             what     where
ReactDOM.render(content, root);