import React from "react";
import Glyph from "./Glyph";

class GlyphSequence extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      height: 100,
      glyphStyle: {
        display: "inline-block"
      }
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(event);
  }

  render() {
    return (
      <div>
        <div>
          {
            this.props.names.map((name, index) => {
              return (
                <Glyph name={name} key={index} style={this.state.glyphStyle} height={this.state.height} />
              )
            })
          }
        </div>
        <div>
          <button>download png</button>
          <input type="number" onChange={this.handleChange} />
        </div>
      </div>
    )
  }
}

export default GlyphSequence;
