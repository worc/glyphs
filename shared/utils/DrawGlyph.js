import Polygon from "./Polygon";

export default class DrawGlyph {
  /**
   *
   * @param canvas
   * @param radius
   * @param borderWidth
   * @param {object} strokeStyle - chroma object
   */
  static hexagon(canvas, radius, borderWidth, strokeStyle) {
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
  static nodes(context, nodeCoordinates, nodeRadius, nodeColor) {
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
  static glyph(context, nodeCoordinates, edges, lineWidth, lineColor) {
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
