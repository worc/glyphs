import React from "react";
import { Switch, Route } from "react-router-dom";

import Glyphtionary from "../shared/components/Glyphtionary";
import GlyphSequence from "../shared/components/GlyphSequence";

class App extends React.Component{
  render() {
    return (
      <Switch>
        <Route path="/glyphs" exact component={Glyphtionary} />
        <Route path="/glyphs/:glyph" exact component={GlyphSequence} />
      </Switch>
    )
  }
}

export default App;
