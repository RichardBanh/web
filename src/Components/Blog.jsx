import React, { Component } from "react";
import Box from "./Blog/BoxBlog";
import data from "../Data/Blog.json";
import Box from "./Blog/BoxBlog";

//place loop for data

class ContentBlog extends Component {
	state = {};

	render() {
		const components = data.blog.map(({ date, text }) => (
			<Box date={date} text={text} />
		));
		return <div className="specialB">{components}</div>;
	}
}

export default ContentBlog;
