import React from "react";
import { Link } from "react-router-dom";

function Box(props) {
	console.log(props.id);
	return (
		<div
			className="EDIT_textblock"
			onClick={(e) => {
				e.preventDefault();
				console.log(props.id);
				window.open(`/blog/${props.id}`, "_self");
			}}
		>
			<div className="date">{props.date}</div>
			<div className="bottom_text_block">
				<p className="text_bottom">{props.text}</p>
			</div>
			<div className="text_overlay"></div>
		</div>
	);
}

export default Box;
