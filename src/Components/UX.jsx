import React, { Component } from "react";

class Ux extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ux">
        <div id="slide1" className="specialB">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vR1I73GsZhUDsu_BAoEQKpme45uGBdIqW3GZLkxgld0Kn3-W4EfluPbe-GDem29oIGOYFFidCdewAmr/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="1000"
            height="700"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          <a className="link slideD" href="#slide2">
            <svg
              width="300"
              height="100"
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
          </a>
        </div>
        <div id="slide2" className="specialB">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRmZB0qtdVbQ9ZQ8BOwCypuJEZKOa13Zl8D2LGYWFCUrKjKzpAUhQ1MPRE8IQrL3lh3JPk2Xf7FInVw/embed?start=false&loop=false&delayms=3000"
            frameborder="0"
            width="1000"
            height="700"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
          ></iframe>
          <a href={`#slide1`} className="link slideU">
            <svg
              width="300"
              height="100"
              viewBox="0 0 47 89"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="slideL"
            >
              <path
                d="M4 36L46 2V71M44 4L1 88"
                stroke="black"
                className="svg-elem-1"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    );
  }
}

export default Ux;
