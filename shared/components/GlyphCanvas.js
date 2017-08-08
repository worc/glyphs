import React from "react";

import Polygon from "../utils/Polygon";
import Nodes from "../utils/Nodes";

class GlyphCanvas extends React.Component {

  componentDidUpdate() {
    debugger;
    let context = this.canvas.getContext("2d");

    // the top and bottom points of the hexagon are cut off
    // subtracting the border width for each point out from the full height of the desired glyph height
    // leaves room for the points to render
    let innerRadius = (this.props.style.height - this.props.style.borderWidth * 2) / 2;
    let nodeCoordinates = Nodes(innerRadius, this.props.style.borderPadding);

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    this.drawCanvasHexagon(this.canvas, innerRadius, this.props.style.borderWidth, this.props.style.borderColor);
    this.drawCanvasNodes(context, nodeCoordinates);
    this.drawCanvasGlyph(context, nodeCoordinates, this.props.edges);
  }

  drawCanvasHexagon(canvas, radius, borderWidth, chromaObj) {
    if(borderWidth > 0) {
      let context = canvas.getContext("2d");
      let coordinates = Polygon.generateCoordinates(canvas.width / 2, canvas.height / 2, 6, radius, Math.PI/6);

      context.lineWidth = borderWidth;
      context.strokeStyle = chromaObj.css(); // color styles handed down are chroma objects and can be converted to css strings with the css() prototype

      context.beginPath();
      coordinates.forEach( (coordinate, index) => {
        if(index === 0) {
          context.moveTo(coordinate.x, coordinate.y);
        } else {
          context.lineTo(coordinate.x, coordinate.y);
        }
      });
      context.closePath();
      context.stroke();
    }
  }

  drawCanvasNodes(context, nodeCoordinates) {
    var radius = context.canvas.height / 2;

    context.fillStyle = this.props.style.nodeColor.css();
    context.translate(radius, radius);

    Object.keys(nodeCoordinates).forEach(position => {
      context.beginPath();
      context.arc(nodeCoordinates[position].x, nodeCoordinates[position].y, this.props.style.nodeRadius, 0, 2 * Math.PI, false);
      context.fill();
    });

    context.translate(-radius, -radius);
  }

  drawCanvasGlyph(context, nodeCoordinates, edges) {
    var radius = context.canvas.height / 2;
    context.translate(radius, radius);

    context.lineWidth = this.props.style.traceWidth;
    context.strokeStyle = this.props.style.traceColor.css();

    edges.forEach(edge => {
      context.beginPath();
      context.moveTo(nodeCoordinates[edge[0]].x, nodeCoordinates[edge[0]].y);
      context.lineTo(nodeCoordinates[edge[1]].x, nodeCoordinates[edge[1]].y);
      context.stroke();
    });

    context.translate(-radius, -radius);
  }

  render() {
    return (
      <canvas ref={(canvas) => { this.canvas = canvas }} height={this.props.style.height} width={this.props.style.height} />
    )
  }
}

export default GlyphCanvas
