import React from "react";

import Polygon from "../utils/Polygon";
import Nodes from "../utils/Nodes";

class GlyphCanvas extends React.Component {

  componentDidUpdate() {
    let context = this.canvas.getContext("2d");
    let radius = this.props.height / 2;
    let nodeCoordinates = Nodes(this.props.height / 2);

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);

    this.drawCanvasHexagon(context, radius);
    this.drawCanvasNodes(context, nodeCoordinates);
    this.drawCanvasGlyph(context, nodeCoordinates, this.props.edges);
  }

  drawCanvasHexagon(context, radius) {
    if(this.props.style.borderWidth > 0) {
      var coordinates = Polygon.generateCoordinates(radius, radius, 6, radius, Math.PI/6);

      context.lineWidth = this.props.style.borderWidth;
      context.strokeStyle = this.props.style.border.css(); // color styles handed down are chroma objects and can be converted to css strings with the css() prototype

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
      <canvas ref={(canvas) => { this.canvas = canvas }} height={this.props.height} width={this.props.height} />
    )
  }
}

export default GlyphCanvas
