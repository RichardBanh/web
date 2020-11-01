import React, {useState} from "react";

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
import githubBut from "../Assets/images/git.png";
import animalLogo from "../Assets/images/logos/AnimalLogo.png";
import brainStation from "../Assets/images/logos/BrainstationLogo.jfif";
import liberalparty from "../Assets/images/logos/LiberalPartyLogo.png";
import UvicLogo from "../Assets/images/logos/UvicLogo.png";
import Box from "./Blog/BoxBlog"
import data from "../Data/Blog.json"

function Landing() {

  const animationHover = () => {console.log("hover")};

  const sorttoFour = data.blog.filter((entry) => entry.id < 5 )

  const dataComponent = 
    sorttoFour.map(({date, text}) => (
      <Box date={date} text={text}/>
  ))

  return (
    <div className="alllanding">
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
            <div className='spacing_block'></div>
              <img src={cat1} />
              <img src={cat2} />
              <img src={cat3} />
              <p>/4 ={">>"}React.js</p>
            </div>
            <div className="rectangleRes">
              <img src={cat4} />
              <div className='spacing_block'></div>
              <img src={cat5} />
              <img className="img_png" src={cat6} />
              <p>/4 ={">>"}Python</p>
            </div>
            <div className="rectangleRes">
              <div className='spacing_block'></div>
              <img src={cat7} />
              <img className="img_png" src={cat8} />
              <div className='spacing_block'></div>
              <p>/4 ={">>"}Node.js</p>
            </div>
            <div className="rectangleRes">
              <img src={cat9} />
              <div className='spacing_block'></div>
              <img className="img_png" src={cat10} />
              <img src={cat11} />
              <p>/4 ={">>"}JavaScript</p>
            </div>
            <div className="rectangleRes">
              <div className='spacing_block'></div>
              <img src={cat12} />
              <img src={cat13} />
              <img src={cat14} />
              <p>/4 ={">>"}UX Design/Cogpsych/CSS</p>
            </div>
            <div className="rectangleRes">
              <div className='spacing_block'></div>
              <div className='spacing_block'></div>
              <div className='spacing_block'></div>
              <p>1/<img src={burgburger} alt="" /> ={">>"}Computer Sci</p>
            </div>
            <div className='rectangleRes_buttonblock'>
              <button className='button'>Resume Download</button>
              <img className="git" src={githubBut} alt=""/>
            </div>
          </div>
          <div className="side2">
            <div className="sandwich1">
              <div className="block">
                <h1>Worked @</h1>
                <img src={animalLogo} alt=""/>
                <img src={liberalparty} alt=""/>
              </div>
              <div className="block">
                <h1>sTuDiEd @</h1>
                <img src={UvicLogo} alt=""/>
                <img src={brainStation} alt=""/>
              </div>
              <a href="mailto:richard.g.banh@gmail.com">richard.g.banh@gmail.com</a>
              <a href="tel:7789527551">778.952.7551</a>
            </div>
            <div className="sandwich2">
              Pattern animation
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="landing2">
        <div className="wrapper_bottom">
        <div className="vertical">Blorgz</div>
          <div className="part1">
            {dataComponent}
          </div>
          <div onMouseOver={animationHover} className="part2">
            <svg className="lines"viewBox="0 0 398 30">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-17.000000, -169.000000)" fill="#D23232" stroke="#979797">
                        <path d="M102.186322,170 L133.259021,198 L70.3927531,198 L102.186322,170 Z M177.554833,170 L193.70446,198 L133.259021,198 L177.554833,170 Z M246.370964,170 L267.464463,198 L193.70446,198 L246.370964,170 Z M321.223031,170 L355.071615,198 L267.464463,198 L321.223031,170 Z M400.911379,170 L414,198 L355.071615,198 L400.911379,170 Z M46.3297017,170 L70.3927531,198 L17,198 L46.3297017,170 Z" ></path>
                    </g>
                </g>
            </svg>
            <svg className="lines"viewBox="0 0 398 30">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-17.000000, -169.000000)" fill="#D23232" stroke="#979797">
                        <path d="M102.186322,170 L133.259021,198 L70.3927531,198 L102.186322,170 Z M177.554833,170 L193.70446,198 L133.259021,198 L177.554833,170 Z M246.370964,170 L267.464463,198 L193.70446,198 L246.370964,170 Z M321.223031,170 L355.071615,198 L267.464463,198 L321.223031,170 Z M400.911379,170 L414,198 L355.071615,198 L400.911379,170 Z M46.3297017,170 L70.3927531,198 L17,198 L46.3297017,170 Z" ></path>
                    </g>
                </g>
            </svg>
            <svg className="lines"viewBox="0 0 398 30">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-17.000000, -169.000000)" fill="#D23232" stroke="#979797">
                        <path d="M102.186322,170 L133.259021,198 L70.3927531,198 L102.186322,170 Z M177.554833,170 L193.70446,198 L133.259021,198 L177.554833,170 Z M246.370964,170 L267.464463,198 L193.70446,198 L246.370964,170 Z M321.223031,170 L355.071615,198 L267.464463,198 L321.223031,170 Z M400.911379,170 L414,198 L355.071615,198 L400.911379,170 Z M46.3297017,170 L70.3927531,198 L17,198 L46.3297017,170 Z" ></path>
                    </g>
                </g>
            </svg>
            <svg className="lines"viewBox="0 0 398 30">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-17.000000, -169.000000)" fill="#D23232" stroke="#979797">
                        <path d="M102.186322,170 L133.259021,198 L70.3927531,198 L102.186322,170 Z M177.554833,170 L193.70446,198 L133.259021,198 L177.554833,170 Z M246.370964,170 L267.464463,198 L193.70446,198 L246.370964,170 Z M321.223031,170 L355.071615,198 L267.464463,198 L321.223031,170 Z M400.911379,170 L414,198 L355.071615,198 L400.911379,170 Z M46.3297017,170 L70.3927531,198 L17,198 L46.3297017,170 Z" ></path>
                    </g>
                </g>
            </svg>
            <svg className="lines"viewBox="0 0 398 30">
                <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="Artboard" transform="translate(-17.000000, -169.000000)" fill="#D23232" stroke="#979797">
                        <path d="M102.186322,170 L133.259021,198 L70.3927531,198 L102.186322,170 Z M177.554833,170 L193.70446,198 L133.259021,198 L177.554833,170 Z M246.370964,170 L267.464463,198 L193.70446,198 L246.370964,170 Z M321.223031,170 L355.071615,198 L267.464463,198 L321.223031,170 Z M400.911379,170 L414,198 L355.071615,198 L400.911379,170 Z M46.3297017,170 L70.3927531,198 L17,198 L46.3297017,170 Z" ></path>
                    </g>
                </g>
            </svg>
          </div>
        </div>
      </div>
    </div>
    
   
  );
}

export default Landing;
