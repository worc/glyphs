import Canvas from "canvas";
import queryString from "query-string";
import chroma from "chroma-js";

import DrawGlyph from "../shared/utils/DrawGlyph";
import Glyphs from "../shared/utils/Glyphs";
import Nodes from "../shared/utils/Nodes";

export default (glyph, query) => {
  let edges = Glyphs.find((element) => {
    return element.name.indexOf(glyph) > -1;
  }).edges;

  let parameters = queryString.parse(query);

  // create default parameters for any not given:
  // colors as stored as chroma objects since the library seems to handle
  // pretty much any color string you throw at it
  let height = parameters.height || 100;
  let width = height;
  let borderColor = chroma(parameters.border || "rgba(0, 0, 0, 1)");
  let borderWidth = parameters.borderWidth || 1;
  let borderPadding = parameters.borderPadding || 20;
  let background = chroma(parameters.background || "rgba(0, 0, 0, 0)");
  let nodeColor = chroma(parameters.nodeColor || "rgba(0, 0, 0, 1)");
  let nodeRadius = parameters.nodeRadius || 3;
  let traceColor = chroma(parameters.traceColor || "rgba(255, 155, 155, 0.5)");
  let traceWidth = parameters.traceWidth || 5;

  // the top and bottom points of the hexagon are cut off
  // subtracting the border width for each point out from the full height of the desired glyph height
  // leaves room for the points to render
  let innerRadius = (height - borderWidth * 2) / 2;
  let nodeCoordinates = Nodes(innerRadius, borderPadding);

  let canvas = new Canvas(height, width);
  let context = canvas.getContext("2d");

  DrawGlyph.hexagon(canvas, innerRadius, borderWidth, borderColor);
  DrawGlyph.nodes(context, nodeCoordinates, nodeRadius, nodeColor);
  DrawGlyph.glyph(context, nodeCoordinates, edges, traceWidth, traceColor);

  return canvas.toDataURL();
}