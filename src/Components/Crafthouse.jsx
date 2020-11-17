import React, { Component } from "react";
import anime from "animejs";

class CraftHouse extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fontgrad: "null",
			color1: "#D76161",
			color2: "#18464B",
			planet: "launch_moon",
			textShadow: "shadowOn",
			shadow: "",
		};
	}

	playanime = () => {
		anime({
			targets: ".tail_path",
			d: [
				{
					value:
						"M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
				{
					value:
						"M 57 21 C 59 15 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 77 47 C 59 34 53 35 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 40 66 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 0 101 C 23.0791 91.4101 14 71 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 -19 30 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 10 14 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 27 28 20 42 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 34 31 C 39.5832 23.3117 40.8525 18.4015 48 10 Z",
				},
				{
					value:
						"M 50 21 C 59 15 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 60 48 C 59 34 53 35 51.0139 33.7422 C 44.0291 42.9454 39 52 38 71 L 31 56 C 34.5059 76.0749 41.4866 88.9569 -5 95 C 23.0791 91.4101 14 71 12 20 C 5.9362 26.378 4.0324 36.1946 1 44 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 18 17 C 18.6327 11.0415 21.1713 7.9711 22 5 C 18.1019 29.3681 27 28 28 43 C 33 39 28.7907 30.6705 35.7755 22.6984 L 45 29 C 39.5832 23.3117 40.8525 18.4015 48 10 Z",
				},
				{
					value:
						"M 57 21 C 59 15 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 77 47 C 59 34 53 35 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 40 66 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 0 101 C 23.0791 91.4101 14 71 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 -19 30 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 10 14 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 27 28 20 42 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 34 31 C 39.5832 23.3117 40.8525 18.4015 48 10 Z",
				},
				{
					value:
						"M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
			],
			duration: 900,
			easing: "linear",
			loop: true,
		});
		anime({
			targets: ".cloud_bucket svg",

			translateY: function () {
				return anime.random(1500, 2000);
			},
			easing: "easeInOutSine",
			duration: function () {
				return anime.random(900, 4000);
			},
			delay: anime.stagger(anime.random(50, 500)),
			loop: true,
		});
	};

	rocketLaunch = (e) => {
		e.preventDefault();
		anime.running.length = 0;
		var animation = anime.timeline({});

		animation
			.add({
				targets: ".rocket",
				rotate: 20,
				easing: "linear",
				duration: 100,
			})
			.add({
				targets: ".rocket",
				translateY: -240,
				translateX: 110,
				duration: 400,
				easing: "easeInOutQuad",
				delay: 150,
			});
		setTimeout(
			() => this.setState({ color1: "#FAFFC0", color2: "#FF3221" }),
			261
		);
		anime({
			targets: "#Rectangle1",
			d: [
				{
					value:
						"M 55.0734 0.0006 L 13 0.0006 L 15 61 L 22 81 C 44 59 52.5045 23.0506 52 35 C 57.6422 9.6779 57.6422 4.2233 55.0734 0.0006 Z",
				},
			],
			duration: 0,
		});
		anime({
			targets: ".tail_path",
			d: [
				{
					value:
						"M 46 37 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 49 83 C 55.4519 46.6308 51 43 51.0139 33.7422 C 44 45 42.7598 53.9883 43 88 L 37.6789 57.0547 C 34.5059 76.0749 27 82 25 127 C 13 96 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 3 66 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 17 25 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 16 44 26 65 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40 38 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
				{
					value:
						"M 48 24 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 56 43 C 55.4519 46.6308 51 43 51.0139 33.7422 C 44 45 42.7598 53.9883 41 64 L 37.6789 57.0547 C 34.5059 76.0749 27 82 25 83 C 13 96 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 4 32 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 18 11 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 16 44 22 38 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 36 26 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
				{
					value:
						"M 50 21 C 59 15 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 60 48 C 59 34 53 35 51.0139 33.7422 C 44.0291 42.9454 39 52 38 71 L 31 56 C 34.5059 76.0749 41.4866 88.9569 -5 95 C 23.0791 91.4101 14 71 12 20 C 5.9362 26.378 4.0324 36.1946 1 44 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 18 17 C 18.6327 11.0415 21.1713 7.9711 22 5 C 18.1019 29.3681 27 28 28 43 C 33 39 28.7907 30.6705 35.7755 22.6984 L 45 29 C 39.5832 23.3117 40.8525 18.4015 48 10 Z",
				},
				{
					value:
						"M 41 54 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 45 108 C 55.4519 46.6308 51 43 51.0139 33.7422 C 44 45 42.7598 53.9883 39 102 L 37.6789 57.0547 C 34.5059 76.0749 27 82 25 127 C 13 96 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 4 80 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 15 57 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 16 44 22 87 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 31 59 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
				{
					value:
						"M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z",
				},
			],
			duration: 400,
			easing: "linear",
			loop: true,
		});

		animation.add({
			targets: ".cloud_bucket svg",
			translateY: "3000px",
			rotate: 20,
			delay: 500,
			duration: 1500,
		});

		animation
			.add({
				targets: ".backgrounddiv .blockChange",
				backgroundColor: ["#495464"],
				easing: "easeInOutQuad",
				delay: anime.stagger(50),
			})
			.add({
				targets: "#float-text, #float-text a ",
				color: "#ffe600",
				delay: 0,
				easing: "easeInOutQuad",
			})
			.add({
				targets: ".launch_moon",
				rotate: 360,
				duration: 500,
				easing: "easeInOutQuad",
			})
			.add({
				targets: "#rocket1",
				duration: 1000,
				translateY: -1040,
				easing: "easeInOutQuad",
			})
			.add({
				targets: "#rocket2",
				duration: 950,
				translateX: 100,
				translateY: -1040,
				easing: "easeOutElastic(1, .6)",
			});
		setTimeout(
			() =>
				this.setState({
					fontgrad: "fontgrad",
					planet: "sun",
					shadow: "shadow",
				}),
			4500
		);
	};

	componentDidMount() {
		this.playanime();
	}

	render() {
		return (
			<>
				<div className={this.state.planet} onClick={this.rocketLaunch}></div>
				<div className="crafthouse">
					<div className="backgrounddiv">
						<div className="blockChange"></div>
						<div className="blockChange"></div>
						<div className="blockChange"></div>
						<div className="blockChange"></div>
						<div className="blockChange"></div>
						<div className="blockChange"></div>
						<div className="blockChange"></div>

						<div id="float-text" className={this.state.shadow}>
							Contact us for design/marketing and coding inquiries at{" "}
							<a href="tel:+17789527551">7789527551</a>
						</div>
					</div>
					<h1 className="crafthouse_header" id={this.state.fontgrad}>
						cRaFtHoUsE
					</h1>
					<div className="rocket">
						<svg
							width="50px"
							height="123px"
							viewBox="0 0 67 207"
							className="rocket_head"
						>
							<defs>
								<radialGradient id="radialGradient-1">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
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
							height="70px"
							viewBox="0 0 65 100"
							version="1.1"
							className="tail"
						>
							<defs>
								<radialGradient id="radialGradient-2">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
								</radialGradient>
							</defs>
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="Export">
									<g id="Tail-Right">
										<path
											d="M 55.0734 0.0006 L 13 0.0006 L 16 49 L 31 58 C 45 39 52.5045 23.0506 56 37 C 57.6422 9.6779 57.6422 4.2233 55.0734 0.0006 Z"
											id="Rectangle1"
											fill="url(#radialGradient-2)"
										></path>
										<path
											className="tail_path"
											d="M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z"
											fill="#000000"
											fill-rule="nonzero"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<div className="rocket" id="rocket2">
						<svg
							width="50px"
							height="123px"
							viewBox="0 0 67 207"
							className="rocket_head"
						>
							<defs>
								<radialGradient id="radialGradient-1">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
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
							height="70px"
							viewBox="0 0 65 100"
							version="1.1"
							className="tail"
						>
							<defs>
								<radialGradient id="radialGradient-2">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
								</radialGradient>
							</defs>
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="Export">
									<g id="Tail-Right">
										<path
											d="M 55.0734 0.0006 L 13 0.0006 L 16 49 L 31 58 C 45 39 52.5045 23.0506 56 37 C 57.6422 9.6779 57.6422 4.2233 55.0734 0.0006 Z"
											id="Rectangle1"
											fill="url(#radialGradient-2)"
										></path>
										<path
											className="tail_path"
											d="M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z"
											fill="#000000"
											fill-rule="nonzero"
										></path>
									</g>
								</g>
							</g>
						</svg>
					</div>
					<div className="rocket" id="rocket1">
						<svg
							width="50px"
							height="123px"
							viewBox="0 0 67 207"
							className="rocket_head"
						>
							<defs>
								<radialGradient id="radialGradient-1">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
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
							height="70px"
							viewBox="0 0 65 100"
							version="1.1"
							className="tail"
						>
							<defs>
								<radialGradient id="radialGradient-2">
									<stop stop-color={this.state.color1} offset="0%"></stop>
									<stop stop-color={this.state.color2} offset="100%"></stop>
								</radialGradient>
							</defs>
							<g
								id="Page-1"
								stroke="none"
								stroke-width="1"
								fill="none"
								fill-rule="evenodd"
							>
								<g id="Export">
									<g id="Tail-Right">
										<path
											d="M 55.0734 0.0006 L 13 0.0006 L 16 49 L 31 58 C 45 39 52.5045 23.0506 56 37 C 57.6422 9.6779 57.6422 4.2233 55.0734 0.0006 Z"
											id="Rectangle1"
											fill="url(#radialGradient-2)"
										></path>
										<path
											className="tail_path"
											d="M 48.4755 24.5391 C 55.4603 16.5625 54.8257 8.5901 51.0139 0 C 69.4259 16.5621 68.7916 36.1952 54.187 57.6683 C 55.4519 46.6308 55.3174 37.3072 51.0139 33.7422 C 44.0291 42.9454 42.7598 53.9883 44.6637 65.0314 L 37.6789 57.0547 C 34.5059 76.0749 41.4866 88.9569 51.6444 100 C 23.0791 91.4101 4.0318 73.0078 14.1903 23.3115 C 5.9362 26.378 4.0324 36.1946 2.7631 46.6237 C -2.9484 28.2176 -0.4099 12.8815 16.0943 0.6114 C 14.825 6.1309 14.825 11.0415 16.7289 15.3345 C 18.6327 11.0415 21.1713 7.9711 24.3484 6.1313 C 18.1019 29.3681 20.693 42.4861 28.1561 50.3036 C 26.2523 39.8735 28.7907 30.6705 35.7755 22.6984 L 40.2179 28.218 C 39.5832 23.3117 40.8525 18.4015 43.3909 13.4949 Z"
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
									<g
										id="cloud-set1"
										transform="translate(32.000000, 339.000000)"
									>
										<g id="First" transform="translate(502.000000, 120.000000)">
											<circle
												id="Oval"
												cx="56"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle
												id="Oval"
												cx="35"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="56" cy="35" r="35"></circle>
											<circle
												id="Oval"
												cx="56"
												cy="112"
												r="35"
												stroke="#D76161"
											></circle>
											<circle
												id="Oval"
												cx="80"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
										</g>
										<g id="third" transform="translate(418.000000, 120.000000)">
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle
												id="Oval"
												cx="56"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="35" cy="77" r="35"></circle>
											<circle
												id="Oval"
												cx="56"
												cy="35"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="56" cy="112" r="35"></circle>
											<circle
												id="Oval"
												cx="80"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
										</g>
										<g
											id="Fourth"
											transform="translate(335.000000, 120.000000)"
										>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle
												id="Oval"
												cx="35"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="56" cy="35" r="35"></circle>
											<circle id="Oval" cx="56" cy="112" r="35"></circle>
											<circle
												id="Oval"
												cx="80"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
										</g>
										<g
											id="Second"
											transform="translate(581.000000, 120.000000)"
										>
											<circle
												id="Oval"
												cx="56"
												cy="77"
												r="35"
												stroke="#D76161"
											></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle
												stroke="#D76161"
												id="Oval"
												cx="35"
												cy="77"
												r="35"
											></circle>
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
										<g
											id="Second"
											transform="translate(246.000000, 120.000000)"
										>
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
										<g
											id="Fourth"
											transform="translate(335.000000, 120.000000)"
										>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="35" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="35" r="35"></circle>
											<circle id="Oval" cx="56" cy="112" r="35"></circle>
											<circle id="Oval" cx="80" cy="77" r="35"></circle>
										</g>
										<g
											id="Second"
											transform="translate(581.000000, 120.000000)"
										>
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
										<g
											id="Second"
											transform="translate(246.000000, 120.000000)"
										>
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
									<g
										id="cloud-set1"
										transform="translate(32.000000, 339.000000)"
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
										<g
											id="Fourth"
											transform="translate(335.000000, 120.000000)"
										>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="35" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="35" r="35"></circle>
											<circle id="Oval" cx="56" cy="112" r="35"></circle>
											<circle id="Oval" cx="80" cy="77" r="35"></circle>
										</g>
										<g
											id="Second"
											transform="translate(581.000000, 120.000000)"
										>
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
										<g
											id="Second"
											transform="translate(246.000000, 120.000000)"
										>
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
										<g
											id="Fourth"
											transform="translate(335.000000, 120.000000)"
										>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="77" r="35"></circle>
											<circle id="Oval" cx="35" cy="77" r="35"></circle>
											<circle id="Oval" cx="56" cy="35" r="35"></circle>
											<circle id="Oval" cx="56" cy="112" r="35"></circle>
											<circle id="Oval" cx="80" cy="77" r="35"></circle>
										</g>
										<g
											id="Second"
											transform="translate(581.000000, 120.000000)"
										>
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
										<g
											id="Second"
											transform="translate(246.000000, 120.000000)"
										>
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
			</>
		);
	}
}

export default CraftHouse;
