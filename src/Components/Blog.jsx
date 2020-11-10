import React, { Component } from "react";
import Box from "./Blog/BoxBlog";

class ContentBlog extends Component {
	state = {
		arr: [],
		from: "#section1",
	};

	compLoop(data) {
		var tempData = data;
		var sectionCount = 0;
		var returnArr = [];
		var tempSecCount = 0;
		let section1 = (
			<svg
				width="47"
				height="89"
				viewBox="0 0 47 89"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M43 53L1 87L1 18M3 85L46 1"
					stroke="black"
					className="svg-elem-0-1"
				></path>
			</svg>
		);
		while (tempData.length > 0) {
			var tempArr = tempData.splice(0, 4);
			const components = tempArr.map(({ date, text, id }) => (
				<Box date={date} text={text} id={id} key={id} />
			));
			//need to modify if statement
			if (sectionCount === 0) {
				//one a head and one back algorithm
				tempSecCount = tempSecCount + 1;
			} else {
				tempSecCount = tempSecCount - 1;
				section1 = (
					<svg
						width="47"
						height="89"
						viewBox="0 0 47 89"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M4 36L46 2V71M44 4L1 88"
							stroke="black"
							className="svg-elem-1"
						></path>
					</svg>
				);
			}
			const sections = [
				<div
					key={sectionCount}
					id={`section${sectionCount}`}
					className="specialB"
				>
					<h1>Blorgz....</h1>
					{components}
					<a href={`#section${tempSecCount}`}>{section1}</a>
				</div>,
			];
			sectionCount++;
			returnArr.push(sections);
		}
		this.setState({ arr: returnArr });
	}

	componentDidMount() {
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
				this.compLoop(json.blog);
			});
	}

	render() {
		return <div className="blog">{this.state.arr}</div>;
	}
}

export default ContentBlog;
