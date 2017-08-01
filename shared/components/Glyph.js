import React from "react";
import Glyphs from "../utils/Glyphs";
import GlyphCanvas from "./GlyphCanvas";
import GlyphStyle from "./GlyphStyle";

class Glyph extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      glyph : Glyphs.find((element) => {
        return element.name.indexOf(this.props.name) > -1;
      }),

      // override default settings sent down by glyph sequence
      style: {
        height: (this.props.sequenceHeight) ? this.props.sequenceHeight : 100,
        width: (this.props.sequenceWidth) ? this.props.sequenceHeight : 100,

        trace: {
          red: 255,
          green: 155,
          blue: 155,
          alpha: 0.8,
          lineWidth: 5
        },
        nodes: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1,
          radius: 3
        },
        hexagon: {
          red: 0,
          green: 0,
          blue: 0,
          alpha: 1,
          lineWidth: 1
        }
      }
    };

    this.onSizeChange = this.onSizeChange.bind(this);
    this.onColorChange = this.onColorChange.bind(this);
  }

  onSizeChange(e) {
    let size = e.target.value;

    this.setState(prevState => {
      let newState = Object.assign({}, prevState);

      newState.style.height = size;
      newState.style.width = size;

      return newState;
    });
  }

  onColorChange(e) {
    let name = e.currentTarget.name;
    let input = e.target.name;
    let value = e.target.value;

    this.setState(prevState => {
      let newState = Object.assign({}, prevState);

      newState.style[name][input] = value;

      return newState;
    });
  }

  render() {
    return (
      <div style={this.props.glyphDisplayStyle} >
        <GlyphCanvas style={this.state.style} height={this.state.style.height} width={this.state.style.width} edges={this.state.glyph.edges} />
        <div>{this.state.glyph.name.join(", ")}</div>
        <GlyphStyle style={this.state.style} height={this.state.style.height} width={this.state.style.width} onSizeChange={this.onSizeChange} onColorChange={this.onColorChange}/>
      </div>
    )
  }
}

export default Glyph;
