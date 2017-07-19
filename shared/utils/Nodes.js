const root3 = Math.sqrt(3);

// Node Positions:
//           TC
//   TL             TR
//      ITL      ITR
//           C
//      IBL      IBR
//   BL             BR
//           BC
// values are in radii, -1 on the y axis means move up 1 radii from the center
const positions = {
    "TOP_CENTER": [0,-1],
    "TOP_RIGHT": [root3/2,-1/2],
    "BOTTOM_RIGHT": [root3/2,1/2],
    "BOTTOM_CENTER": [0,1],
    "BOTTOM_LEFT": [-root3/2,1/2],
    "TOP_LEFT": [-root3/2,-1/2],
    "INNER_TOP_RIGHT": [root3/4,-1/4],
    "INNER_BOTTOM_RIGHT": [root3/4,1/4],
    "INNER_BOTTOM_LEFT": [-root3/4,1/4],
    "INNER_TOP_LEFT": [-root3/4,-1/4],
    "CENTER": [0,0]
};

function nodePositions(radius) {
    // todo shrinkage as parameter, shrinkage will create padding between nodes and the radius given
    // between the edge of the plane and the glyph itself
    var shrinkage = 0.8;
    var nodePositions = {};

    Object.keys(positions).forEach(key => {
        nodePositions[key] = {};
        nodePositions[key]['x'] = positions[key][0] * radius * shrinkage;
        nodePositions[key]['y'] = positions[key][1] * radius * shrinkage;
    });

    return nodePositions;
}

module.exports = nodePositions;
