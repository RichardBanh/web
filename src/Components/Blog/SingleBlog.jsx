import React from "react";
import { useParams } from "react-router-dom";

function SingleBlog(props) {
  const id = useParams();

  const data2 = props.dataFind(id.id);

  if (!data2) {
    return <div>Loading</div>;
  } else {
    return (
      <div className="singleBlogp">
        <div className="single_block">
          <div className="blog_date">{data2.date}</div>
          <div className="blog_text">{data2.text}</div>
        </div>
      </div>
    );
  }
}

export default SingleBlog;
