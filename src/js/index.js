//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
//include bootstrap npm library into the bundle
import "bootstrap";
//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
import { Counter } from "./component/counter.js";

let value = 0;
//render your react application
setInterval(() => {
	value++;
	ReactDOM.render(
		<Counter seconds={value} />,
		document.querySelector("#app")
	);
}, 1000);
