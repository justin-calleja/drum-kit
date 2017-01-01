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
      playBuffer: []
    };

    this.keyDown = this.keyDown.bind(this);
    this.transitionEnd = this.transitionEnd.bind(this);
  }

  transitionEnd(e) {
    if (e.propertyName !== 'transform') return;

    this.setState({ playBuffer: [] });
  }

  keyDown(e) {
    if (!this.state.playBuffer.includes(e.keyCode)) {
      this.setState({
        playBuffer: this.state.playBuffer.concat([e.keyCode])
      });
    }
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
        <Clap    keyCode="65" keyChar="A" isPlaying={this.state.playBuffer.includes(65)} />,
        <HiHat   keyCode="83" keyChar="S" isPlaying={this.state.playBuffer.includes(83)} />,
        <Kick    keyCode="68" keyChar="D" isPlaying={this.state.playBuffer.includes(68)} />,
        <OpenHat keyCode="70" keyChar="F" isPlaying={this.state.playBuffer.includes(70)} />,
        <Boom    keyCode="71" keyChar="G" isPlaying={this.state.playBuffer.includes(71)} />,
        <Ride    keyCode="72" keyChar="H" isPlaying={this.state.playBuffer.includes(72)} />,
        <Snare   keyCode="74" keyChar="J" isPlaying={this.state.playBuffer.includes(74)} />,
        <Tom     keyCode="75" keyChar="K" isPlaying={this.state.playBuffer.includes(75)} />,
        <Tink    keyCode="76" keyChar="L" isPlaying={this.state.playBuffer.includes(76)} />
      </div>
    );
  }
}
