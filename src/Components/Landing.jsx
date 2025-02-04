import React from "react";
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
import githubBut from "../Assets/images/git.png";

import brain from "../Assets/images/logos/BrainstationLogo.jfif";
import animal from "../Assets/images/logos/AnimalLogo.png";
import liberal from "../Assets/images/logos/LiberalPartyLogo.png";
import uvic from "../Assets/images/logos/UvicLogo.png";

import Box from "./Blog/BoxBlog";
import InstagramPhotos from "./photoComp";

import images from "../Data/images.json";
import { useState, useEffect } from "react";

function Landing(props) {
  const [blogArray, setArray] = useState(null);

  const shuffled = images.images.sort(() => 0.5 - Math.random());
  const selected = shuffled.slice(0, 4);
  const instaImg = selected.map(({ link, id }) => (
    <InstagramPhotos key={id} link={link} />
  ));

  useEffect(() => {
    fetch("../Data/Blog.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        const sorttoFour = json.blog.reverse();
        setArray(
          sorttoFour.map(({ date, text, id }) => (
            <Box date={date} text={text} key={id} id={id} />
          ))
        );
      });
  }, []);
  return (
    <div className="alllanding">
      <div className="landing background_landing">
        <div className="wrapper">
          <div className="subtop">
            <h1>Richard Banh</h1>
            <img
              className="landing_profilepic visPhoto"
              src={profilepic}
              alt=""
            />
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
                <div className="spacing_block"></div>
                <img src={cat1} alt="Cat Drawing" />
                <img src={cat2} alt="Cat Drawing" />
                <img src={cat3} alt="Cat Drawing" />
                <p>/4 ={">>"}React.js</p>
              </div>
              <div className="rectangleRes">
                <img src={cat4} alt="Cat Drawing" />
                <div className="spacing_block"></div>
                <img src={cat5} alt="Cat Drawing" />
                <img className="img_png" src={cat6} alt="Cat Drawing" />
                <p>/4 ={">>"}Python</p>
              </div>
              <div className="rectangleRes">
                <div className="spacing_block"></div>
                <img src={cat7} alt="Cat Drawing" />
                <img className="img_png" src={cat8} alt="Cat Drawing" />
                <div className="spacing_block"></div>
                <p>/4 ={">>"}Node.js</p>
              </div>
              <div className="rectangleRes">
                <img src={cat9} alt="Cat Drawing" />
                <div className="spacing_block"></div>
                <img className="img_png" src={cat10} alt="Cat Drawing" />
                <img src={cat11} alt="Cat Drawing" />
                <p>/4 ={">>"}JavaScript</p>
              </div>
              <div className="rectangleRes">
                <div className="spacing_block"></div>
                <img src={cat12} alt="Cat Drawing" />
                <img src={cat13} alt="Cat Drawing" />
                <img src={cat14} alt="Cat Drawing" />
                <p>/4 ={">>"}UX Design/Cogpsych/CSS</p>
              </div>
              <div className="rectangleRes">
                <div className="spacing_block"></div>
                <div className="spacing_block"></div>
                <div className="spacing_block"></div>
                <p>
                  1/
                  <img src={burgburger} alt="" /> ={">>"}Computer Sci
                </p>
              </div>
              <div className="rectangleRes_buttonblock landingdisplay">
                <button
                  className="button"
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(
                      "https://drive.google.com/file/d/1sbTg4u4pBasLYJrjvzw-NEKCrug7Ng3Q/view?usp=sharing"
                    );
                  }}
                >
                  Resume Download
                </button>

                <a
                  href="https://github.com/RichardBanh"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img className="git" src={githubBut} alt="" />
                </a>
              </div>
            </div>
            <div className="side2">
              <div className="sandwich1">
                <div className="block">
                  <h1>Worked @</h1>
                  <img
                    src={animal}
                    alt="Animal Logic Link"
                    onClick={(e) => {
                      window.open("https://animallogic.com/");
                    }}
                  />
                  <img
                    src={liberal}
                    alt="Liberal Party link"
                    onClick={(e) => {
                      window.open("https://liberal.ca/");
                    }}
                  />
                </div>
                <div className="block">
                  <h1>sTuDiEd @</h1>
                  <img
                    src={uvic}
                    alt="UVic Link"
                    onClick={(e) => {
                      window.open("https://www.uvic.ca");
                    }}
                  />
                  <img
                    src={brain}
                    alt="BrainStation Link"
                    onClick={(e) => {
                      window.open("https://www.brainstation.io");
                    }}
                  />
                </div>
                <div className="rectangleRes_buttonblock landingdisplay2">
                  <button
                    className="button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(
                        "https://drive.google.com/file/d/17PesUJpbsGpi4zn0QUrwp-rZqdkM7dOn/view?usp=sharing"
                      );
                    }}
                  >
                    Resume Download
                  </button>

                  <a
                    href="https://github.com/RichardBanh"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img className="git" src={githubBut} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="landing2">
        <div className="wrapper_bottom">
          <div className="vertical">Blorgz</div>
          <div className="part1">{blogArray}</div>
          <div className="vertical2">Travel</div>
          <div className="part2">
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <svg
              width="629"
              height="26"
              viewBox="0 0 629 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              overflow="visible"
            >
              <path
                d="M1 11L136 3L230 17L314 3L393 23L419 3L490 23L553 3L628 11"
                stroke="rgb(0,0,0)"
                strokeWidth="4"
              />
            </svg>
            <div className="imgInsta">{instaImg}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landing;
