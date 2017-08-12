import React from "react";
import queryString from "query-string";
import chroma from "chroma-js";

import Glyph from "./Glyph";
import GlyphStyle from "./GlyphStyle";
import ShareLink from "./ShareLink";

class GlyphSequence extends React.Component {

  constructor(props) {
    super(props);

    let delimiters = new RegExp(/[+\-_]/); // allow for + - and _ to be delimiters for glyph sequences
    let glyphSequence = this.props.match.params.glyph.split(delimiters);
    let parameters = queryString.parse(this.props.location.search);

    // create default parameters for any not given:
    // colors as stored as chroma objects since the library seems to handle
    // pretty much any color string you throw at it
    let height = parameters.height || 100;
    let width = height;
    let borderColor = chroma(parameters.border || "rgba(0, 0, 0, 1)");
    let borderWidth = parameters.borderWidth || 1;
    let borderPadding = parameters.borderPadding || 20;
    let background = chroma(parameters.background || "rgba(0, 0, 0, 0)");
    let nodeColor = chroma(parameters.nodeColor || "rgba(0, 0, 0, 1)");
    let nodeRadius = parameters.nodeRadius || 3;
    let traceColor = chroma(parameters.traceColor || "rgba(255, 155, 155, 0.5)");
    let traceWidth = parameters.traceWidth || 5;


    this.state = {
      sequence: glyphSequence,
      style: {
        height: height,
        width: width,
        borderColor: borderColor,
        borderWidth: borderWidth,
        borderPadding: borderPadding,
        background: background,
        nodeColor: nodeColor,
        nodeRadius: nodeRadius,
        traceColor: traceColor,
        traceWidth: traceWidth,
      },
      glyphDisplayStyle: {
        display: "inline-block"
      },
    };

    this.onSizeChange = this.onSizeChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      inBrowser: true
    });
  }

  onSizeChange(e) {
    let name = e.target.name;
    let value = e.target.value;

    this.setState(prevState => {
      let newState = Object.assign({}, prevState);

      newState.style[name] = [value];
      newState.style.width = newState.style.height; // coercing height and width to stay the same for now

      return newState;
    });
  }

  onColorChange(e) {
    let name = e.currentTarget.name;
    let channel = e.target.name;
    let value = e.target.value;

    this.setState(prevState => {
      let newState = Object.assign({}, prevState);

      if(channel === "alpha") {
        newState.style[name] = prevState.style[name].alpha(value);
      } else {
        newState.style[name] = prevState.style[name].set(channel, value);
      }

      return newState;
    });
  }

  render() {
    return (
      <div>
        <div>
          {
            this.state.sequence.map((name, index) => {
              return (
                <Glyph name={name} key={index} glyphDisplayStyle={this.state.glyphDisplayStyle} style={this.state.style} />
              )
            })
          }
        </div>
        <div>
          <GlyphStyle
            style={this.state.style}
            onSizeChange={this.onSizeChange}
            onColorChange={this.onColorChange}
          />
          <button>download png</button>
          <ShareLink host={this.props.host} pathname={this.props.location.pathname} params={this.state.style} />
        </div>
      </div>
    )
  }
}

export default GlyphSequence;
