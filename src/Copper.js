import React, { Component } from 'react';
import styled from 'styled-components';

class Copper extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.state = {
      canvas: undefined,
      fabricHeight: 1000,
      fabricWidth: 1000
    };
  }

  componentWillMount() {}

  componentDidMount() {
    this.setState({ canvas: document.getElementById(this.props.id).getContext('2d') });

    // this.timerID = setInterval(() => this.updateCanvas(Math.random()), 1000);
  }

  componentDidUpdate() {
    this.updateCanvas(this.props.x, this.props.y);
  }

  updateCanvas(x, y) {
    console.log(x, y);
    const context = this.state.canvas;
    const gradient = context.createLinearGradient(
      this.state.fabricWidth / 4,
      this.state.fabricHeight / 10,
      x / 5,
      y / 15
    );
    gradient.addColorStop(0, '#B87333');
    gradient.addColorStop(0.1, '#925013');
    gradient.addColorStop(0.2, '#6C3400');
    gradient.addColorStop(0.3, '#DE9C5F');
    gradient.addColorStop(0.4, '#452100');
    gradient.addColorStop(0.5, '#925013');
    gradient.addColorStop(0.6, '#452100');
    gradient.addColorStop(0.7, '#DE9C5F');
    gradient.addColorStop(0.8, '#FFC793');
    gradient.addColorStop(0.9, '#FFDBB9');
    context.fillStyle = gradient;
    context.fillRect(0, 0, this.state.fabricWidth, this.state.fabricHeight);
  }

  render() {
    return (
      <FabricFrame>
        <Fabric id={this.props.id}>nothing...</Fabric>
        <Print>{this.props.children}</Print>
      </FabricFrame>
    );
  }
}

const Fabric = styled.canvas`
  box-sizing: border-box;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
`;

const Print = styled.div`
  box-sizing: border-box;
  bottom: 0;
  color: inherit;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  text-align: left;
`;

const FabricFrame = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100%;
  display: block;
`;

export default Copper;
