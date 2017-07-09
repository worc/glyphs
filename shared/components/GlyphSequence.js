import React from "react";
import Glyph from "./Glyph";

class GlyphSequence extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let inlineStyle = {
      display: "inline-block"
    };

    return (
      <div>
        {
          this.props.names.map((name, index) => {
            return (
              <Glyph name={name} key={index} style={inlineStyle} />
            )
          })
        }
      </div>
    )
  }
}

export default GlyphSequence;
