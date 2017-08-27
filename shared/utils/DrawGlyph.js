// import Canvas from "canvas";
import queryString from "query-string";
import chroma from "chroma-js";

import Glyphs from "./Glyphs";
import Polygon from "./Polygon";
import Nodes from "./Nodes";

export default class GlyphImage {
  /**
   *
   * @param canvas
   * @param radius
   * @param borderWidth
   * @param {object} strokeStyle - chroma object
   */
  static drawCanvasHexagon(canvas, radius, borderWidth, strokeStyle) {
    if(borderWidth > 0) {
      let context = canvas.getContext("2d");
      let coordinates = Polygon.generateCoordinates(canvas.width / 2, canvas.height / 2, 6, radius, Math.PI/6);

      context.lineWidth = borderWidth;
      context.strokeStyle = strokeStyle.css(); // color styles handed down are chroma objects and can be converted to css strings with the css() prototype

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

  /**
   *
   * @param context
   * @param nodeCoordinates
   * @param nodeRadius
   * @param {object} nodeColor - chroma object
   */
  static drawCanvasNodes(context, nodeCoordinates, nodeRadius, nodeColor) {
    let radius = context.canvas.height / 2;

    context.fillStyle = nodeColor.css();
    context.translate(radius, radius);

    Object.keys(nodeCoordinates).forEach(position => {
      context.beginPath();
      context.arc(nodeCoordinates[position].x, nodeCoordinates[position].y, nodeRadius, 0, 2 * Math.PI, false);
      context.fill();
    });

    context.translate(-radius, -radius);
  }

  /**
   *
   * @param context
   * @param nodeCoordinates
   * @param edges
   * @param lineWidth
   * @param {object} lineColor - chroma object
   */
  static drawCanvasGlyph(context, nodeCoordinates, edges, lineWidth, lineColor) {
    let radius = context.canvas.height / 2;

    // todo add effect for touched nodes?
    // let touchedNodes = [];
    //
    // edges.reduce((edgesA, edgesB) => {
    //   return edgesA.concat(edgesB);
    // }).forEach(node => {
    //   if(touchedNodes.indexOf(node) === -1) {
    //     touchedNodes.push(node);
    //   }
    // });

    context.translate(radius, radius);

    context.lineWidth = lineWidth;
    context.strokeStyle = lineColor.css();
    context.fillStyle = lineColor.css();

    // todo parameterize
    context.lineCap = "round";
    context.lineJoin = "round";

    context.beginPath();

    edges.forEach(edge => {
      context.moveTo(nodeCoordinates[edge[0]].x, nodeCoordinates[edge[0]].y);
      context.lineTo(nodeCoordinates[edge[1]].x, nodeCoordinates[edge[1]].y);
    });

    context.stroke();

    context.translate(-radius, -radius);
  }
}

// export default (glyph, query) => {
//   let edges = Glyphs.find((element) => {
//     return element.name.indexOf(glyph) > -1;
//   }).edges;
//
//   let parameters = queryString.parse(query);
//
//   // create default parameters for any not given:
//   // colors as stored as chroma objects since the library seems to handle
//   // pretty much any color string you throw at it
//   let height = parameters.height || 100;
//   let width = height;
//   let borderColor = chroma(parameters.border || "rgba(0, 0, 0, 1)");
//   let borderWidth = parameters.borderWidth || 1;
//   let borderPadding = parameters.borderPadding || 20;
//   let background = chroma(parameters.background || "rgba(0, 0, 0, 0)");
//   let nodeColor = chroma(parameters.nodeColor || "rgba(0, 0, 0, 1)");
//   let nodeRadius = parameters.nodeRadius || 3;
//   let traceColor = chroma(parameters.traceColor || "rgba(255, 155, 155, 0.5)");
//   let traceWidth = parameters.traceWidth || 5;
//
//   // the top and bottom points of the hexagon are cut off
//   // subtracting the border width for each point out from the full height of the desired glyph height
//   // leaves room for the points to render
//   let innerRadius = (this.props.style.height - this.props.style.borderWidth * 2) / 2;
//   let nodeCoordinates = Nodes(innerRadius, this.props.style.borderPadding);
//
//   let canvas = new Canvas(height, width);
//   let context = canvas.getContext("2d");
//
//   GlyphImage.drawCanvasHexagon(canvas, innerRadius, borderWidth, borderColor);
//   GlyphImage.drawCanvasNodes(context, nodeCoordinates, nodeRadius, nodeColor);
//   GlyphImage.drawCanvasGlyph(context, nodeCoordinates, edges, traceWidth, traceColor);
//
//   return canvas.toDataURL();
// }
