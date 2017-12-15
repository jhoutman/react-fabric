import React, { Component } from 'react';

import Copper from './Copper.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
  }
  componentDidMount() {
    window.addEventListener('mousemove', this.updateCoordinates.bind(this));
  }

  updateCoordinates({ screenX, screenY }) {
    this.setState({ x: screenX, y: screenY });
  }

  render() {
    return (
      <div
        className="App"
        style={{ boxSizing: 'border-box', width: '100%', height: '200px', padding: '20px' }}
      >
        <Copper id="test" x={this.state.x} y={this.state.y}>
          <div>New component here...</div>
        </Copper>
      </div>
    );
  }
}

export default App;
