var NodePosition = {
    "positions": [
        "TOP_CENTER",
        "BOTTOM_CENTER",
        "TOP_LEFT",
        "TOP_RIGHT",
        "BOTTOM_LEFT",
        "BOTTOM_RIGHT",
        "INNER_TOP_LEFT",
        "INNER_TOP_RIGHT",
        "INNER_BOTTOM_LEFT",
        "INNER_BOTTOM_RIGHT",
        "CENTER"
    ],

    "TOP_CENTER": "TOP_CENTER",
    "TOP_RIGHT": "TOP_RIGHT",
    "BOTTOM_RIGHT": "BOTTOM_RIGHT",
    "BOTTOM_CENTER": "BOTTOM_CENTER",
    "BOTTOM_LEFT": "BOTTOM_LEFT",
    "TOP_LEFT": "TOP_LEFT",
    "INNER_TOP_RIGHT": "INNER_TOP_RIGHT",
    "INNER_BOTTOM_RIGHT": "INNER_BOTTOM_RIGHT",
    "INNER_BOTTOM_LEFT": "INNER_BOTTOM_LEFT",
    "INNER_TOP_LEFT": "INNER_TOP_LEFT",
    "CENTER": "CENTER"
};

if(typeof define === 'undefined') {
    module.exports = NodePosition;
} else {
    define(function(require, exports, module) {
        module.exports = NodePosition;
    });
}
