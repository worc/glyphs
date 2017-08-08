import React from "react";

class GlyphStyle extends React.Component {

  constructor(props){
    super(props);

    this.colorChannels = [
      "red",
      "green",
      "blue",
      "alpha"
    ];

    this.state = {
      height: 100,
      width: 100,
      heightWidthLock: "free"
    };
  }

  colorChannelGenerator(name) {
    return (channel, index) => {
      let channelShorthand = (channel === "alpha") ? "alpha" : "rgb." + channel.substring(0,1); // chroma-js shorthand to pull single color channels out of the object
      let max = (channel === "alpha") ? 1 : 255;
      let step = (channel === "alpha") ? 0.1 : 1;
      let defaultValue = (channel === "alpha") ? this.props.style[name].alpha() : this.props.style[name].get(channelShorthand);

      return (
        <label key={index}>
          {channel}:
          <input
            type="number"
            name={channelShorthand} // used by the onColorChange handler to set the chroma object's color through its API
            defaultValue={defaultValue}
            min="0"
            max={max}
            step={step}
          />
        </label>
      )
    }
  }

  render() {
   return (
     <div>
       <form onChange={this.props.onSizeChange}>
         <label>
           height:
           <input type="number" name="height" defaultValue={this.props.style.height} min="0" />
         </label>
         {/*<label>*/}
           {/*width:*/}
           {/*<input type="number" name="width" defaultValue={this.props.width}/>*/}
         {/*</label>*/}
       </form>

       {/* the form name is an identifier for the onColorChange handler to change the right property in the parent component's state */}
       <form name="traceColor" onChange={this.props.onColorChange}>
         <h3>trace</h3>
         {
           this.colorChannels.map(this.colorChannelGenerator("traceColor"))
         }
       </form>

       <form onChange={this.props.onSizeChange}>
         <label>
           trace width:
           <input type="number" name="traceWidth" defaultValue={this.props.style.traceWidth} min="0" />
         </label>
       </form>

       <form name="nodeColor" onChange={this.props.onColorChange}>
         <h3>nodes</h3>
         {
           this.colorChannels.map(this.colorChannelGenerator("nodeColor"))
         }
       </form>

       <form onChange={this.props.onSizeChange}>
         <label>
           radius:
           <input type="number" name="nodeRadius" defaultValue={this.props.style.nodeRadius} min="0" />
         </label>
       </form>

       <form name="borderColor" onChange={this.props.onColorChange}>
         <h3>border</h3>
         {
           this.colorChannels.map(this.colorChannelGenerator("borderColor"))
         }
       </form>

       <form onChange={this.props.onSizeChange}>
         <label>
           border width:
           <input type="number" name="borderWidth" defaultValue={this.props.style.borderWidth} min="0" />
         </label>
       </form>
     </div>
   )
  }
}

export default GlyphStyle;