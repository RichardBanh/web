import React from "react";
import { useParams } from "react-router-dom";
import profilepic from "../Assets/images/profile_pic.jpg";

function Landing() {
  const bar = useParams()
  console.log(bar)
  return (
    <div className='landing background_landing'>
      <div className='wrapper'>
        <h1>Richard Banh</h1>
        <img className="landing_profilepic" src={profilepic} alt=""/>
      </div>
    </div>
  )
}

export default Landing;