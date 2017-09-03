import Canvas from "canvas";
import queryString from "query-string";
import chroma from "chroma-js";

import DrawGlyph from "../shared/utils/DrawGlyph";
import Glyphs from "../shared/utils/Glyphs";
import Nodes from "../shared/utils/Nodes";

export default class GlyphImage {
  constructor(glyphSequence, query) {
    // default values are overridden by destructured query string object
    let {
      height = 100,
      width = 100,
      borderColor = chroma("rgba(0, 0, 0, 1)"),
      borderWidth = 1,
      borderPadding = 20,
      background = chroma("rgba(0, 0, 0, 0)"),
      nodeColor = chroma("rgba(0, 0, 0, 1)"),
      nodeRadius = 3,
      traceColor = chroma("rgba(255, 155, 155, 0.5)"),
      traceWidth = 5
    } = queryString.parse(query);

    // // values are packed into the parameters object to be sent down to each image
    // let parameters = {
    //   height,
    //   width,
    //   borderColor,
    //   borderWidth,
    //   borderPadding,
    //   background,
    //   nodeColor,
    //   nodeRadius,
    //   traceColor,
    //   traceWidth
    // };

    this.canvas = new Canvas(width * glyphSequence.length, height);
    let context = this.canvas.getContext("2d");

    // the top and bottom points of the hexagon are cut off
    // subtracting the border width for each point out from the full height of the desired glyph height
    // leaves room for the points of the hex to render
    let hexRadius = (height - borderWidth * 2) / 2;

    glyphSequence.forEach( (glyph, index) => {
      let edges = Glyphs.find((element) => {
        return element.name.indexOf(glyph) > -1;
      }).edges;

      let nodeCoordinates = Nodes(hexRadius, borderPadding, width * index);

      let center = {
        x: width / 2 + (width * index),
        y: height / 2
      };

      DrawGlyph.hexagon(this.canvas, hexRadius, borderWidth, borderColor, center.x, center.y);
      DrawGlyph.nodes(context, nodeCoordinates, nodeRadius, nodeColor);
      DrawGlyph.glyph(context, nodeCoordinates, edges, traceWidth, traceColor);
    });
  }

  get dataUrl() {
    return this.canvas.toDataURL();
  }

  get buffer() {
    return this.canvas.toDataURL().replace('data:image/png;base64,', '')
  }
}
