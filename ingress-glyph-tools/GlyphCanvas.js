var Canvas = require('canvas');
var Polygon = require('./Polygon');
var nodePositions = require('./nodePositions');

function GlyphCanvas(height, edges) {
    var canvas = new Canvas(height, height);
    var context = canvas.getContext('2d');
    var radius = height / 2;
    var nodeCoordinates = nodePositions(radius);

    this.drawCanvasHexagon(context, radius);
    this.drawCanvasNodes(context, nodeCoordinates);
    this.drawCanvasGlyph(context, nodeCoordinates, edges);

    return canvas;
}

GlyphCanvas.prototype.drawCanvasHexagon = function(context, radius) {
    var coordinates = Polygon.generateCoordinates(radius, radius, 6, radius, Math.PI/6);

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
};

GlyphCanvas.prototype.drawCanvasNodes = function(context, nodeCoordinates) {
    var radius = context.canvas.height / 2;

    context.fillStyle = "black";
    context.translate(radius, radius);

    Object.keys(nodeCoordinates).forEach(position => {
        context.beginPath();
        context.arc(nodeCoordinates[position].x, nodeCoordinates[position].y, 3, 0, 2*Math.PI, false);
        context.fill();
    });

    context.translate(-radius, -radius);
};

GlyphCanvas.prototype.drawCanvasGlyph = function(context, nodeCoordinates, edges) {
    var radius = context.canvas.height / 2;
    context.translate(radius, radius);

    context.lineWidth = 5;
    context.strokeStyle = 'rgba(255,155,155, 0.8)';

    edges.forEach(edge => {
        context.beginPath();
        context.moveTo(nodeCoordinates[edge[0]].x, nodeCoordinates[edge[0]].y);
        context.lineTo(nodeCoordinates[edge[1]].x, nodeCoordinates[edge[1]].y);
        context.stroke();
    });

    context.translate(-radius, -radius);
};

module.exports = GlyphCanvas;
