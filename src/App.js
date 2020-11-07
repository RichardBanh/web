import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ContentBlog from "./Components/Blog";
import Code from "./Components/Blog";
import CraftHouse from "./Components/Crafthouse";
import Ux from "./Components/UX";
import Landing from "./Components/Landing";
import home from "./Assets/icons/home.svg";
import book from "./Assets/icons/book.svg";
import rocket from "./Assets/icons/rocket.svg";
import pen from "./Assets/icons/pen.svg";
import code from "./Assets/icons/code.svg";
import SingleBlog from "./Components/Blog/SingleBlog";
import data from "./Data/Blog.json";

function App() {
	const dataFind = (event) => {
		
			return data.blog.find((entry) => {
				return entry.id === Number(event);
			})
		
	};
	// data.blog.find(() => {
	// 	console.log(event);
	// 	return event;
	// });
	return (
		<BrowserRouter>
			<div className="App">
				<div className="sandwich">
					<ul className="menu">
						<li className="rectangle">
							<Link to="/">
								<div className="shapeshifter play">
									<img className="icon" src={home} />
								</div>
								<p className="visibility">Home</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/blog">
								<div className="shapeshifter play">
									<img className="icon" src={book} />
								</div>
								<p className="visibility">Blog</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/UX">
								<div className="shapeshifter play">
									<img className="icon" src={pen} />
								</div>
								<p className="visibility">UX</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/Code">
								<div className="shapeshifter play">
									<img className="icon" src={code} />
								</div>
								<p className="visibility">Code</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/cRaFtHouse">
								<div className="shapeshifter2 play2">
									<img className="icon" src={rocket} />
								</div>
								<p className="visibility">cRaFtHouse</p>
							</Link>
						</li>
					</ul>
				</div>
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route path="/code">
						<Code />
					</Route>
					<Route exact path="/blog">
						<ContentBlog />
					</Route>
					<Route path="/blog/:id">
						<SingleBlog dataFind={dataFind} />
					</Route>
					<Route path="/ux">
						<Ux />
					</Route>
					<Route path="/crafthouse">
						<CraftHouse />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
