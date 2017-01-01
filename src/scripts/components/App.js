import React, { Component } from 'react';
import Boom from './instruments/Boom';
import Clap from './instruments/Clap';
import HiHat from './instruments/HiHat';
import Kick from './instruments/Kick';
import OpenHat from './instruments/OpenHat';
import Ride from './instruments/Ride';
import Snare from './instruments/Snare';
import Tink from './instruments/Tink';
import Tom from './instruments/Tom';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false
    };

    this.keyDown = this.keyDown.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
  }

  transitionEnd(e) {
    if (e.propertyName !== 'transform') return;

    this.setState({ isPlaying: false });
  }

  keyDown(e) {
    this.setState({
      isPlaying: e.keyCode
    });
  }

  componentDidMount() {
    window.addEventListener('keydown', this.keyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.keyDown);
  }

  render() {
    return (
      <div className="keys" onTransitionEnd={this.transitionEnd}>
        <Clap    keyCode="65" keyChar="A" isPlaying={this.state.isPlaying === 65} />,
        <HiHat   keyCode="83" keyChar="S" isPlaying={this.state.isPlaying === 83} />,
        <Kick    keyCode="68" keyChar="D" isPlaying={this.state.isPlaying === 68} />,
        <OpenHat keyCode="70" keyChar="F" isPlaying={this.state.isPlaying === 70} />,
        <Boom    keyCode="71" keyChar="G" isPlaying={this.state.isPlaying === 71} />,
        <Ride    keyCode="72" keyChar="H" isPlaying={this.state.isPlaying === 72} />,
        <Snare   keyCode="74" keyChar="J" isPlaying={this.state.isPlaying === 74} />,
        <Tom     keyCode="75" keyChar="K" isPlaying={this.state.isPlaying === 75} />,
        <Tink    keyCode="76" keyChar="L" isPlaying={this.state.isPlaying === 76} />
      </div>
    );
  }
}
