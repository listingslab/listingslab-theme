/**
 * Created by Chris Dorward on 05/04/2017
 * smartComponents/App
 */

import React, { Component, PropTypes } from 'react';

class App extends Component {

  static propTypes = {
    children: PropTypes.any
  }

  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false
    };
  }

  render() {
    return (
      <div className="listingslab-theme">
        listingslab-theme
      </div>
    );
  }
}

export default App;
