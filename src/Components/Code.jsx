import React, { Component } from "react";

class CodePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="code_page_float">
        <h1>Code</h1>
        <div className="code_page_flow">
          <div className="front_end"></div>
          <div className="back_end"></div>
        </div>
        <div className="code_incom">
          <h1 className="ux_title">
            In the works ^..^<br></br>
            come back later
          </h1>
        </div>
      </div>
    );
  }
}

export default CodePage;
