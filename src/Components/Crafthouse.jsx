import React, { Component } from "react";
import anime from "animejs";

class CraftHouse extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	playanime = () => {
		anime({
			targets: ".cloud_bucket svg",

			translateY: ['350vh'],
      easing: 'spring(10, 50, 10, 0)',
      duration:7000,
      delay:anime.stagger(200),
      loop: true,

		});
	};

	componentDidMount() {
		this.playanime();
	}
	render() {
		return (
			<div className="crafthouse">
				<h1 className="crafthouse_header">cRaFtHoUsE</h1>
				<div className="rocket">
					<svg
						width="67px"
						height="207px"
						viewBox="0 0 67 207"
						className="rocket_head"
					>
						<defs>
							<radialGradient
								cx="-45.3181465%"
								cy="11.0681419%"
								fx="-45.3181465%"
								fy="11.0681419%"
								r="201.612112%"
								gradientTransform="translate(-0.453181,0.110681),scale(1.000000,0.636364),rotate(43.881015),translate(0.453181,-0.110681)"
								id="radialGradient-1"
							>
								<stop stop-color="#D76161" offset="0%"></stop>
								<stop stop-color="#18464B" offset="100%"></stop>
							</radialGradient>
						</defs>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g id="Export" transform="translate(-211.000000, -175.000000)">
								<g
									id="Rocket-cone"
									transform="translate(211.000000, 175.000000)"
								>
									<rect
										id="Rectangle"
										fill="#FFFFFF"
										fill-rule="nonzero"
										x="8"
										y="69"
										width="52"
										height="135"
									></rect>
									<text
										id="Letter-C"
										fill="url(#radialGradient-1)"
										font-family="Athelas-Regular, Athelas"
										font-size="48"
										font-weight="normal"
										letter-spacing="0.290909"
									>
										<tspan x="18" y="150">
											C
										</tspan>
									</text>
									<path
										d="M67,80.31443 L33.7836565,0 L0.176661518,78.4903104 C-0.263922057,79.5292138 0.11958677,80.4578016 1.327188,81.2760736 L5.06902509,84.0365457 C5.48872929,84.0365457 5.83012784,85.3740378 5.83012784,87.0183068 L5.83012784,204.018239 C5.83012784,205.662508 6.17152639,207 6.59123059,207 L60.9738113,207 C61.3935155,207 61.734914,205.662508 61.734914,204.018239 L61.7380459,87.0183068 C61.7380459,85.3740378 62.0794445,84.0365457 62.4991487,84.0365457 L66.109521,81.1677145 L67,80.31443 Z M57.8723834,201.552632 C47.2840264,198.738437 39.2593004,197.33134 33.7982052,197.33134 C28.3371101,197.33134 20.3129772,198.738437 9.72580645,201.552632 C9.75007056,150.395126 9.76220262,111.670385 9.76220262,85.378409 C9.76220262,65.6287457 21.8710139,86.8166742 33.7982052,85.378409 C45.6883388,83.9446126 57.3962184,59.8148901 57.8755503,84.8485569 C58.5156554,118.278794 58.5145998,157.180152 57.8723834,201.552632 Z"
										id="Shape"
										fill="#000000"
										fill-rule="nonzero"
									></path>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="65px"
						height="100px"
						viewBox="0 0 65 100"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						className="rocket_tail"
					>
						<defs>
							<radialGradient
								cx="72.2752596%"
								cy="68.1225734%"
								fx="72.2752596%"
								fy="68.1225734%"
								r="98.2743695%"
								gradientTransform="translate(0.722753,0.681226),scale(1.000000,0.733333),rotate(-90.000000),translate(-0.722753,-0.681226)"
								id="radialGradient-1"
							>
								<stop stop-color="#D76161" offset="0%"></stop>
								<stop stop-color="#18464B" offset="100%"></stop>
							</radialGradient>
						</defs>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g id="Export" transform="translate(-210.000000, -377.000000)">
								<g id="Tail-Left" transform="translate(210.000000, 377.000000)">
									<path
										d="M55.0733553,0.0006 L13,0.0006 L13,60.0006 L39.8801992,39.5460545 C47.4401104,30.7778564 52.5044958,23.0505837 55.0733553,16.3642364 C57.6422149,9.67788903 57.6422149,4.22334358 55.0733553,0.0006 Z"
										id="Rectangle"
										fill="url(#radialGradient-1)"
									></path>
									<path
										d="M48.4754842,24.5391472 C55.4602992,16.5624994 54.8256641,8.59005154 51.0139212,0 C69.4258934,16.5620994 68.7915687,36.1952172 54.1869933,57.668346 L54.302172,56.692495 C55.4519253,46.630772 55.3174403,37.3072238 51.0139212,33.7422025 C44.0291062,42.9453577 42.759836,53.9883239 44.6637414,65.0313902 L37.6789264,57.0547423 C34.5058543,76.0748564 41.4866336,88.9569337 51.6444172,100 C23.079111,91.4101485 4.03177929,73.007838 14.1902872,23.3115399 C5.93620202,26.3779583 4.03240016,36.1946172 2.76312994,46.6236797 C-2.94837912,28.2175693 -0.409942149,12.8814773 16.094296,0.611403668 C14.8250258,6.13093679 14.8250258,11.0414662 16.7289104,15.334492 C18.6327123,11.0414662 21.1712527,7.97114783 24.3483605,6.13133679 L23.9779903,7.48227077 C18.1019087,29.3681086 20.6929616,42.4860949 28.1560677,50.3036018 C26.2522658,39.8735392 28.7906821,30.670484 35.7755178,22.6984362 L40.2178601,28.2179693 C39.5832457,23.3117399 40.8524745,18.4015104 43.3909322,13.494881 C46.5640042,15.9479957 47.8332745,19.6316178 47.8332745,24.5379472 L48.4754842,24.5391472 Z"
										id="Path2"
										fill="#000000"
										fill-rule="nonzero"
									></path>
								</g>
							</g>
						</g>
					</svg>
				</div>
				<div className="cloud_bucket">
					<svg
						className="clouds1"
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -338.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g id="cloud-set1" transform="translate(32.000000, 339.000000)">
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="363px"
						height="149px"
						viewBox="0 0 363 149"
						version="1.1"
						className="clouds2"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -343.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set1-small"
									transform="translate(48.000000, 344.000000)"
								>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						className="clouds3"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -61.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set2-R"
									transform="translate(380.000000, 195.500000) scale(-1, 1) translate(-380.000000, -195.500000) translate(32.000000, 62.000000)"
								>
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="382px"
						height="149px"
						viewBox="0 0 382 149"
						version="1.1"
						className="clouds4"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -111.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set2-small"
									transform="translate(48.000000, 112.000000)"
								>
									<g id="First" transform="translate(176.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="third" transform="translate(87.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="Fourth">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="Second" transform="translate(259.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="363px"
						height="149px"
						viewBox="0 0 363 149"
						version="1.1"
						className="clouds2"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -343.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set1-small"
									transform="translate(48.000000, 344.000000)"
								>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						className="clouds1"
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -338.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g id="cloud-set1" transform="translate(32.000000, 339.000000)">
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="363px"
						height="149px"
						viewBox="0 0 363 149"
						version="1.1"
						className="clouds2"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -343.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set1-small"
									transform="translate(48.000000, 344.000000)"
								>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						className="clouds3"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -61.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set2-R"
									transform="translate(380.000000, 195.500000) scale(-1, 1) translate(-380.000000, -195.500000) translate(32.000000, 62.000000)"
								>
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="382px"
						height="149px"
						viewBox="0 0 382 149"
						version="1.1"
						className="clouds4"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -111.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set2-small"
									transform="translate(48.000000, 112.000000)"
								>
									<g id="First" transform="translate(176.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="third" transform="translate(87.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="Fourth">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
									<g id="Second" transform="translate(259.000000, 0.000000)">
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="36.826087"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="35"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="58.9217391"
											cy="112"
											rx="36.826087"
											ry="35"
										></ellipse>
										<ellipse
											id="Oval"
											cx="84.173913"
											cy="77"
											rx="36.826087"
											ry="35"
										></ellipse>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="363px"
						height="149px"
						viewBox="0 0 363 149"
						version="1.1"
						className="clouds2"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -343.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set1-small"
									transform="translate(48.000000, 344.000000)"
								>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						className="clouds1"
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -338.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g id="cloud-set1" transform="translate(32.000000, 339.000000)">
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="363px"
						height="149px"
						viewBox="0 0 363 149"
						version="1.1"
						className="clouds2"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
						>
							<g
								id="Export"
								transform="translate(-47.000000, -343.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set1-small"
									transform="translate(48.000000, 344.000000)"
								>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
					<svg
						width="698px"
						height="269px"
						viewBox="0 0 698 269"
						version="1.1"
						className="clouds3"
					>
						<g
							id="Page-1"
							stroke="none"
							stroke-width="1"
							fill="none"
							fill-rule="evenodd"
							opacity="0.291457403"
						>
							<g
								id="Export"
								transform="translate(-31.000000, -61.000000)"
								stroke="#979797"
								stroke-width="2"
							>
								<g
									id="cloud-set2-R"
									transform="translate(380.000000, 195.500000) scale(-1, 1) translate(-380.000000, -195.500000) translate(32.000000, 62.000000)"
								>
									<g id="First" transform="translate(502.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(418.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(335.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(581.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="First" transform="translate(167.000000, 0.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="third" transform="translate(83.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Fourth" transform="translate(0.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
									<g id="Second" transform="translate(246.000000, 120.000000)">
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="77" r="35"></circle>
										<circle id="Oval" cx="35" cy="77" r="35"></circle>
										<circle id="Oval" cx="56" cy="35" r="35"></circle>
										<circle id="Oval" cx="56" cy="112" r="35"></circle>
										<circle id="Oval" cx="80" cy="77" r="35"></circle>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</div>
		);
	}
}

export default CraftHouse;
