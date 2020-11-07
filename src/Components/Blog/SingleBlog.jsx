import React, { useAsync } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleBlog(props) {
	
    const id = useParams();
    console.log(id.id)
	const data2 = props.dataFind(id.id);

	return (
		<div className="singleBlogp">
			<div className="single_block">
				<div className="blog_date">{data2.date}</div>
				<div className="blog_text">{data2.text}</div>
			</div>
		</div>
	);
}

export default SingleBlog;
