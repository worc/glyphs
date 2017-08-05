import React from "react";
import queryString from "query-string";
import chroma from "chroma-js";

import Glyph from "./Glyph";
import GlyphStyle from "./GlyphStyle";

class GlyphSequence extends React.Component {

  constructor(props) {
    super(props);

    let delimiters = new RegExp(/[+\-_]/); // allow for + - and _ to be delimiters for glyph sequences
    let glyphSequence = this.props.match.params.glyph.split(delimiters);

    this.state = {
      sequence: glyphSequence,
      height: 100,
      width: 100,
      glyphDisplayStyle: {
        display: "inline-block"
      },
    };
  }

  componentDidMount() {
    this.setState({
      inBrowser: true
    });
  }

  render() {
    // console.log("render props", this.props);

    return (
      <div>
        <div>
          {
            this.state.sequence.map((name, index) => {
              return (
                <Glyph name={name} key={index} glyphDisplayStyle={this.state.glyphDisplayStyle} sequenceHeight={this.state.height} sequenceWidth={this.state.width} />
              )
            })
          }
        </div>
        <div>
          <button>download png</button>
        </div>
      </div>
    )
  }
}

export default GlyphSequence;
