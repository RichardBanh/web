import React, { useAsync } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleBlog(props) {
    
    const [data, setData] = useState(false)
    const id = useParams()

    const setDataFunc = async () => {
        const returnData = await props.dataFind(id)
        
        setData(returnData);
    }
    setDataFunc()
    if( data===false) {
        return <div>Loading</div>
    } else {
        console.log(data)
        return <div>Blog</div>;
    }

	
}

export default SingleBlog;
