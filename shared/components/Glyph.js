import React from "react";
import GlyphCanvas from "../../ingress-glyph-tools/GlyphCanvas";

class Glyph extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      canvas : new GlyphCanvas(100, props.edges)
    }
  }

  render() {
    return (
      <div>
        <img src={ this.state.canvas.toDataURL() } />
        <div>{this.props.name}</div>
      </div>
    )
  }
}

module.exports = Glyph;