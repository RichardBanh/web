import React from "react";
import { useParams } from "react-router-dom";

function Landing() {
  const bar = useParams()
  console.log(bar)
  return (
    <div>Landing</div>
  )
}

export default Landing;