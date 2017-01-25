var GlyphCanvas = require('./GlyphCanvas');

function Glyph(name, edges) {
    this.name = name;
    this.edges = edges;
}

Glyph.prototype.toSvg = function() {
    console.log('todo');
};

Glyph.prototype.toCanvas = function(height) {
    this.canvas = new GlyphCanvas(height, this.edges);
    return this.canvas;
};

Glyph.prototype.toBase64 = function(height, webHeader) {
    return (webHeader) ?
        this.toCanvas(height).toDataURL():
        this.toCanvas(height).toDataURL().replace('data:image/png;base64,', '');
};

module.exports = Glyph;
