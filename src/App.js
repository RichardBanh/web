import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import ContentBlog from "./Components/Blog";
import CodePage from "./Components/Code";
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
	const [size, setSize] = useState(0);
	const tempData = data;
	const dataFind = (event) => {
		return tempData.blog.find((entry) => {
			return entry.id === Number(event);
		});
	};
	useEffect(() => {
		const height = document.getElementById("sandwich").clientHeight;
		setSize(height);
	}, []);

	return (
		<BrowserRouter>
			<div className="App">
				<div className="sandwich" id="sandwich">
					<ul className="menu">
						<li className="rectangle">
							<Link to="/">
								<div className="shapeshifter play">
									<img className="icon" src={home} alt="Home Link" />
								</div>
								<p className="visibility">Home</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/blog">
								<div className="shapeshifter play">
									<img className="icon" src={book} alt="Blog Link" />
								</div>
								<p className="visibility">Blog</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/UX">
								<div className="shapeshifter play">
									<img className="icon" src={pen} alt="User Experience Link" />
								</div>
								<p className="visibility">UX</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/code">
								<div className="shapeshifter play">
									<img className="icon" src={code} alt="Code Link" />
								</div>
								<p className="visibility">Code</p>
							</Link>
						</li>
						<li className="rectangle">
							<Link to="/cRaFtHouse">
								<div className="shapeshifter2 play2">
									<img
										className="icon"
										src={rocket}
										alt="Inhouse Design - Craft House"
									/>
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
					<Route exact path="/code">
						<CodePage />
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
						<CraftHouse size={size} />
					</Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
