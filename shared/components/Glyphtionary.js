import React from "react";
import { Link } from "react-router-dom";

import Glyphs from "../utils/Glyphs";

class Glyphtionary extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>
          {
            Glyphs.map( (glyph, index) => {
              return (
                <div key={index}>
                  <div><Link to={ "/glyphs/" + glyph.name[0] }>{glyph.name.join(", ")}</Link></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

export default Glyphtionary;
