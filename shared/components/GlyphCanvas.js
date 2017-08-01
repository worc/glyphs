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

  /**
   * helper function to convert the color/alpha information stored as an object
   * into a CSS color string. maybe i'll have to handle hsl(a) and color names here too
   *
   * @param styleObject
   * @returns {string}
   */
  colorStringFromObject(styleObject) {
    return "rgba(" +
      styleObject.red + "," +
      styleObject.green + "," +
      styleObject.blue + "," +
      styleObject.alpha + ")";
  }

  drawCanvasHexagon(context, radius) {
    var coordinates = Polygon.generateCoordinates(radius, radius, 6, radius, Math.PI/6);

    context.lineWidth = this.props.style.hexagon.lineWidth;
    context.strokeStyle = this.colorStringFromObject(this.props.style.hexagon);

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

  drawCanvasNodes(context, nodeCoordinates) {
    var radius = context.canvas.height / 2;

    context.fillStyle = this.colorStringFromObject(this.props.style.nodes);
    context.translate(radius, radius);

    Object.keys(nodeCoordinates).forEach(position => {
      context.beginPath();
      context.arc(nodeCoordinates[position].x, nodeCoordinates[position].y, this.props.style.nodes.radius, 0, 2 * Math.PI, false);
      context.fill();
    });

    context.translate(-radius, -radius);
  }

  drawCanvasGlyph(context, nodeCoordinates, edges) {
    var radius = context.canvas.height / 2;
    context.translate(radius, radius);

    context.lineWidth = this.props.style.trace.lineWidth;
    context.strokeStyle = this.colorStringFromObject(this.props.style.trace);

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
