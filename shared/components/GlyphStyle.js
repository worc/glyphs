import React from "react";

class GlyphStyle extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      height: 100,
      width: 100,
      heightWidthLock: "free"
    };
  }

  render() {
   return (
     <div>
       <form onChange={this.props.onSizeChange}>
         <label>
           height:
           <input type="number" name="height" defaultValue={this.props.style.height} />
         </label>
         {/*<label>*/}
           {/*width:*/}
           {/*<input type="number" name="width" defaultValue={this.props.width}/>*/}
         {/*</label>*/}
       </form>

       <form name="trace" onChange={this.props.onColorChange}>
         <h3>trace</h3>
        <label>
          red:
          <input type="number" name="red" defaultValue={this.props.style.trace.red} min="0" max="255" />
        </label>
         <label>
           green:
           <input type="number" name="green" defaultValue={this.props.style.trace.green} min="0" max="255" />
         </label>
         <label>
           blue:
           <input type="number" name="blue" defaultValue={this.props.style.trace.blue} min="0" max="255" />
         </label>
         <label>
           alpha:
           <input type="number" name="alpha" defaultValue={this.props.style.trace.alpha} min="0" max="1" step="0.1" />
         </label>
         <label>
           line width:
           <input type="number" name="lineWidth" defaultValue={this.props.style.trace.lineWidth} />
         </label>
       </form>

       <form name="nodes" onChange={this.props.onColorChange}>
         <h3>nodes</h3>
         <label>
           red:
           <input type="number" name="red" defaultValue={this.props.style.nodes.red} min="0" max="255" />
         </label>
         <label>
           green:
           <input type="number" name="green" defaultValue={this.props.style.nodes.green} min="0" max="255" />
         </label>
         <label>
           blue:
           <input type="number" name="blue" defaultValue={this.props.style.nodes.blue} min="0" max="255" />
         </label>
         <label>
           alpha:
           <input type="number" name="alpha" defaultValue={this.props.style.nodes.alpha} min="0" max="1" step="0.1" />
         </label>
         <label>
           radius:
           <input type="number" name="radius" defaultValue={this.props.style.nodes.radius} />
         </label>
       </form>

       <form name="hexagon" onChange={this.props.onColorChange}>
         <h3>hexagon</h3>
         <label>
           red:
           <input type="number" name="red" defaultValue={this.props.style.hexagon.red} min="0" max="255" />
         </label>
         <label>
           green:
           <input type="number" name="green" defaultValue={this.props.style.hexagon.green} min="0" max="255" />
         </label>
         <label>
           blue:
           <input type="number" name="blue" defaultValue={this.props.style.hexagon.blue} min="0" max="255" />
         </label>
         <label>
           alpha:
           <input type="number" name="alpha" defaultValue={this.props.style.hexagon.alpha} min="0" max="1" step="0.1" />
         </label>
         <label>
           line width:
           <input type="number" name="lineWidth" defaultValue={this.props.style.hexagon.lineWidth} />
         </label>
       </form>
     </div>
   )
  }
}

// function GlyphStyle() {
//     this.border = {
//         color: '',
//         radius: ''
//     };
//
//     this.background = {
//         color: '',
//         radius: ''
//     };
//
//     this.grid = {
//         color: '',
//         radius: ''
//     };
//
//     this.line = {
//         color: '',
//         radius: ''
//     };
//
//     this.glyph = {
//         size: '',
//     }
// }
//
// if(typeof define === 'undefined') {
//     module.exports = GlyphStyle;
// } else {
//     define(function(require, exports, module) {
//         module.exports = GlyphStyle;
//     });
// }
//

export default GlyphStyle;