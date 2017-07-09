import React from "react";
import Glyphs from "../../ingress-glyph-tools/Glyphs";
import GlyphCanvas from "../../ingress-glyph-tools/GlyphCanvas";

class Glyph extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      glyph : Glyphs.find((element) => {
        return element.name.indexOf(this.props.name) > -1;
      })
    }
  }

  render() {
    let canvas = new GlyphCanvas(100, this.state.glyph.edges);

    return (
      <div style={this.props.style} >
        <img src={ canvas.toDataURL() } />
        <div>{this.state.glyph.name.join(", ")}</div>
      </div>
    )
  }
}

module.exports = Glyph;
