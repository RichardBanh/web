import React, { Component } from "react";

function Box(props) {
	return (
		<div className="EDIT_textblock">
			<div className="date">{props.date}</div>
			<div className="bottom_text_block">
				<p className="text_bottom">{props.text}</p>
			</div>
			<div className="text_overlay"></div>
		</div>
	);
}

export default Box;
