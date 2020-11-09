import React, { Component } from "react";
import Box from "./Blog/BoxBlog";
import data from "../Data/Blog.json";

//place loop for data

class ContentBlog extends Component {
	render() {
		const components = data.blog.map(({ date, text, id }) => (
			<Box date={date} text={text} id={id} />
		));
		return (
			<div className="blog">
				<h1>Blorgz....</h1>
				<div className="specialB">{components}</div>
			</div>
		);
	}
}

export default ContentBlog;
