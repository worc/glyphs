import React from "react";

import DrawGlyph from "../utils/DrawGlyph";
import Nodes from "../utils/Nodes";

class GlyphCanvas extends React.Component {

  componentDidUpdate() {
    let context = this.canvas.getContext("2d");

    // the top and bottom points of the hexagon are cut off
    // subtracting the border width for each point out from the full height of the desired glyph height
    // leaves room for the points to render
    let innerRadius = (this.props.style.height - this.props.style.borderWidth * 2) / 2;
    let nodeCoordinates = Nodes({ radius: innerRadius, padding: this.props.style.borderPadding });
    let center = {
      x: this.canvas.width / 2,
      y: this.canvas.height / 2,
    };

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    DrawGlyph.hexagon(this.canvas, innerRadius, this.props.style.borderWidth, this.props.style.borderColor, center.x, center.y);
    DrawGlyph.nodes(context, nodeCoordinates, this.props.style.nodeRadius, this.props.style.nodeColor);
    DrawGlyph.glyph(context, nodeCoordinates, this.props.edges, this.props.style.traceWidth, this.props.style.traceColor);

  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas }} height={this.props.style.height} width={this.props.style.height} />
    )
  }
}

export default GlyphCanvas
