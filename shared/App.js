import React from "react";
import { Switch, Route } from "react-router-dom";

import Glyphtionary from "../shared/components/Glyphtionary";
import GlyphSequence from "../shared/components/GlyphSequence";

class App extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/glyphs" exact render={(props) => <Glyphtionary host={this.props.host} {...props} />} />
        <Route path="/glyphs/:glyph" exact render={(props) => <GlyphSequence host={this.props.host} {...props} />} />
      </Switch>
    )
  }
}

export default App;
