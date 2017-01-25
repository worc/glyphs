let root3 = Math.sqrt(3);

var NodePositions = {
    // Node Indices:
    //         0
    //   5            1
    //      9      6
    //         10
    //      8      7
    //   4            2
    //         3
    // values are in radii, -1 on the y axis means move up 1 radii from the center
    "positions": [
        [0,-1],
        [root3/2,-1/2],
        [root3/2,1/2],
        [0,1],
        [-root3/2,1/2],
        [-root3/2,-1/2],
        [root3/4,-1/4],
        [root3/4,1/4],
        [-root3/4,1/4],
        [-root3/4,-1/4],
        [0,0]
    ],

    // Node Positions:
    //           TC
    //   TL             TR
    //      ITL      ITR
    //           C
    //      IBL      IBR
    //   BL             BR
    //           BC
    // values are in radii, -1 on the y axis means move up 1 radii from the center
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

if(typeof define === 'undefined') {
    module.exports = NodePositions;
} else {
    define(function(require, exports, module) {
        module.exports = NodePositions;
    });
}
