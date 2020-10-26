import React from "react";
import { useParams } from "react-router-dom";
import profilepic from "../Assets/images/profile_pic.jpg";
import burgburger from "../Assets/icons/group1Cats/burgburger.svg";
import cat1 from "../Assets/icons/group1Cats/cat1.svg";
import cat2 from "../Assets/icons/group1Cats/cat2.svg";
import cat3 from "../Assets/icons/group1Cats/cat3-1.svg";
import cat4 from "../Assets/icons/group1Cats/cat3.svg";
import cat5 from "../Assets/icons/group1Cats/Cats2cat2-1.svg";

import cat7 from "../Assets/icons/group1Cats/Cats2cat2-3.svg";

import cat9 from "../Assets/icons/group1Cats/Cats4cat4-1.svg";

import cat8 from "../Assets/icons/group1Cats/cat3-1.png";
import cat6 from "../Assets/icons/group1Cats/cat4-1.png";
import cat10 from "../Assets/icons/group1Cats/cat2-2.png";

import cat11 from "../Assets/icons/group1Cats/cat3-1.svg";
import cat12 from "../Assets/icons/group1Cats/cats5cat5-1.svg";
import cat13 from "../Assets/icons/group1Cats/cats5cat5-2.svg";
import cat14 from "../Assets/icons/group1Cats/cats5cat5-3.svg";

function Landing() {
  const bar = useParams();
  console.log(bar);
  return (
    <div className="landing background_landing">
      <div className="wrapper">
        <div className="subtop">
          <h1>Richard Banh</h1>
          <img className="landing_profilepic" src={profilepic} alt="" />
        </div>
        <p className="text">
          Looking to build cool stuff, <br />
          for better or for worse; we learn something new and old ^..^
        </p>
        <p className="font">
          Mostly looking for a job but here are somethoughts here and there,
          maybe some illiterations from a faux literate.{" "}
        </p>
        <div className="bottom-block">
          <div className="side">
            <div className="rectangleRes">
              <img src={burgburger} alt="" />
            </div>
            <div className="rectangleRes">
              <img src={cat1} />
              <img src={cat2} />
              <img src={cat3} />
            </div>
            <div className="rectangleRes">
              <img src={cat4} />
              <img src={cat5} />
              <img className="img_png" src={cat6} />
            </div>
            <div className="rectangleRes">
              <img src={cat7} />
              <img className="img_png" src={cat8} />
            </div>
            <div className="rectangleRes">
              <img src={cat9} />
              <img className="img_png" src={cat10} />
              <img src={cat11} />
            </div>
            <div className="rectangleRes">
              <img src={cat12} />
              <img src={cat13} />
              <img src={cat14} />
            </div>
          </div>
          <div className="side">dsfasdfasdfasdfadfs</div>
        </div>
      </div>
      <div className="wrapper_bottom"></div>
    </div>
  );
}

export default Landing;
