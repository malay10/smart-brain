import React, { Component } from "react";
import "./ImageLink.css";

class ImageLinkForm extends Component {
  render() {
    return (
      <div>
        <p className="f3">
          {"This Magic Brain will detect face in your pictures. Give it a try."}
        </p>
        <div className="center">
          <div
            className="form pa4 br3 shadow-5 center"
            style={({ width: 700 }, pattern)}
          >
            <input
              className="f4 pa2 w-70 center"
              type="text"
              placeholder="Enter url"
              onChange={this.props.onInputChange}
            />
            <button
              className="w-30 grow f4 link ph3 pv3 dib white bg-light-purple"
              onClick={this.props.onSubmit}
            >
              Detect Me
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const pattern = {};

export default ImageLinkForm;
