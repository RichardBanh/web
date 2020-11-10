import React from "react";
import { Link } from "react-router-dom";
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
import Box from "./Blog/BoxBlog";
import InstagramPhotos from "./photoComp";
import dataM from "../Data/Blog.json";
import images from "../Data/images.json";
import { useState } from "react";

function Landing(props) {
	const [data, setData] = useState(dataM)
	
	const shuffled = images.images.sort(() => 0.5 - Math.random());
	const selected = shuffled.slice(0, 4);
	const instaImg = selected.map(({ link }) => <InstagramPhotos link={link} />);
	const sorttoFour = data.blog.filter((entry) => entry.id < 5);

	const dataComponent = sorttoFour.map(({ date, text, id }) => (
		<Box date={date} text={text} id={id} />
	));

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
								<div className="spacing_block"></div>
								<img src={cat1} />
								<img src={cat2} />
								<img src={cat3} />
								<p>/4 ={">>"}React.js</p>
							</div>
							<div className="rectangleRes">
								<img src={cat4} />
								<div className="spacing_block"></div>
								<img src={cat5} />
								<img className="img_png" src={cat6} />
								<p>/4 ={">>"}Python</p>
							</div>
							<div className="rectangleRes">
								<div className="spacing_block"></div>
								<img src={cat7} />
								<img className="img_png" src={cat8} />
								<div className="spacing_block"></div>
								<p>/4 ={">>"}Node.js</p>
							</div>
							<div className="rectangleRes">
								<img src={cat9} />
								<div className="spacing_block"></div>
								<img className="img_png" src={cat10} />
								<img src={cat11} />
								<p>/4 ={">>"}JavaScript</p>
							</div>
							<div className="rectangleRes">
								<div className="spacing_block"></div>
								<img src={cat12} />
								<img src={cat13} />
								<img src={cat14} />
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
							<div className="rectangleRes_buttonblock">
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

								<a href="https://github.com/RichardBanh" target="_blank">
									<img className="git" src={githubBut} alt="" />
								</a>
							</div>
						</div>
						<div className="side2">
							<div className="sandwich1">
								<div className="block">
									<h1>Worked @</h1>
									<img
										src={animalLogo}
										alt=""
										onClick={(e) => {
											e.preventDefault();
											window.open("https://animallogic.com/");
										}}
									/>
									<img
										src={liberalparty}
										alt=""
										onClick={(e) => {
											e.preventDefault();
											window.open("https://liberal.ca/");
										}}
									/>
								</div>
								<div className="block">
									<h1>sTuDiEd @</h1>
									<img
										src={UvicLogo}
										alt=""
										onClick={(e) => {
											e.preventDefault();
											window.open("https://www.uvic.ca");
										}}
									/>
									<img
										src={brainStation}
										alt=""
										onClick={(e) => {
											e.preventDefault();
											window.open("https://www.brainstation.io");
										}}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="landing2">
				<div className="wrapper_bottom">
					<div className="vertical">Blorgz</div>
					<div className="part1">{dataComponent}</div>
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
								stroke-width="4"
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
