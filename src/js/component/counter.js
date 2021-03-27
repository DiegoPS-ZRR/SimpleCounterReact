import React from "react";
import PropTypes from "prop-types";

export function Counter(props) {
	return (
		<div className="clock-container justify-content-around text-center mt-5 d-flex">
			<h1>
				<i className="far fa-clock"></i>
			</h1>
			<h1>{Math.floor(props.seconds / 100000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 10000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 1000) % 10}</h1>
			<h1>{Math.floor(props.seconds / 100) % 10}</h1>
			<h1>{Math.floor(props.seconds / 10) % 10}</h1>
			<h1>{props.seconds % 10}</h1>
		</div>
	);
}

Counter.propTypes = {
	seconds: PropTypes.number
};
