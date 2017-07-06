var Glyph = require('./Glyph.js');
var Glyphs = require('./Glyphs.json');

function Glyphtionary() {
    Glyphs.forEach(glyph => {
       this[glyph.name[0]] = new Glyph(glyph.name, glyph.edges);
    });
}

module.exports = new Glyphtionary();