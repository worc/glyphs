import React from "react";
import queryString from "query-string";

class ShareLink extends React.Component {
  render() {
    let query = "?" + queryString.stringify(this.props.params);

    return (
      <div>
        {this.props.host + this.props.pathname + query}
      </div>
    );
  }
}

export default ShareLink;
