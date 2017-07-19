var Polygon = {};

Polygon.generateCoordinates = function(centerX, centerY, numberOfSides, radius, rotation) {
    var coordinates = [];
    for(var i = 0; i < numberOfSides; i++) {
        coordinates.push({
            x: parseFloat((centerX + radius * Math.cos(rotation + (i * 2 * Math.PI / numberOfSides))).toFixed(4)),
            y: parseFloat((centerY + radius * Math.sin(rotation + (i * 2 * Math.PI / numberOfSides))).toFixed(4))
        })
    }

    return coordinates;
};


module.exports = Polygon;