import React from "react";

import Glyphs from "../../ingress-glyph-tools/Glyphs";

class Glyphtionary extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      glyphs: Glyphs
    }
  }

  render() {
    return (
      <div>
        <div>
          {
            Glyphs.map( (glyph, index) => {
              let url = "glyphs/" + glyph.name[0];

              return (
                <div key={index}>
                  <div><a href={url}>{glyph.name.join(", ")}</a></div>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}

module.exports = Glyphtionary;
