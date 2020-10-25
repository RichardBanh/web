import React from "react";
import { useParams } from "react-router-dom";
import profilepic from "../Assets/images/profile_pic.jpg";

function Landing() {
  const bar = useParams()
  console.log(bar)
  return (
    <div className='landing background_landing'>
      <div className='wrapper'>
        <div className='subtop'>
          <h1>Richard Banh</h1>
          <img className="landing_profilepic" src={profilepic} alt=""/>
        </div>
        <p className='text'>Looking to build cool stuff, <br/>for better or for worse; we learn something new and old ^..^</p>
        <p className='font'>Mostly looking for a job but here are somethoughts here and there, maybe some illiterations from a faux literate. </p>
        <div className='bottom-block'>
          <div className='side'>
            sfgasdfasdfas
          </div>
          <div className='side'>
          dsfasdfasdfasdfadfs
        </div>
        </div>
      </div>
      <div className='wrapper_bottom'></div>
    </div>
  )
}

export default Landing;