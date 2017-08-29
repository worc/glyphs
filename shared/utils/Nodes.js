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
// values given are [x, y] pairs taken from the trig unit circle
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

function nodePositions(radius, padding, xOffset = 0, yOffset = 0) {
    var nodePositions = {};
    var shrinkage = (100 - padding) / 100; // padding is essentially a whole % number meaning how many percent towards the edge of the unit circle, and is flipped around to get a simple multiplicative value "shrinkage"

    Object.keys(positions).forEach(key => {
        nodePositions[key] = {};
        nodePositions[key]['x'] = positions[key][0] * radius * shrinkage + xOffset; // pull the coordinates away from the edge of the unit circle by multiplying by shrinkage
        nodePositions[key]['y'] = positions[key][1] * radius * shrinkage + yOffset;
    });

    return nodePositions;
}

module.exports = nodePositions;
