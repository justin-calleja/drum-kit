import React, { Component } from 'react';
import InstrumentKey from './InstrumentKey';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = { playBuffer: [] };

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
        <InstrumentKey keyCode="65" keyChar="A" isPlaying={this.state.playBuffer.includes(65)} soundName="clap"    />,
        <InstrumentKey keyCode="83" keyChar="S" isPlaying={this.state.playBuffer.includes(83)} soundName="hihat"   />,
        <InstrumentKey keyCode="68" keyChar="D" isPlaying={this.state.playBuffer.includes(68)} soundName="kick"    />,
        <InstrumentKey keyCode="70" keyChar="F" isPlaying={this.state.playBuffer.includes(70)} soundName="openhat" />,
        <InstrumentKey keyCode="71" keyChar="G" isPlaying={this.state.playBuffer.includes(71)} soundName="boom"    />,
        <InstrumentKey keyCode="72" keyChar="H" isPlaying={this.state.playBuffer.includes(72)} soundName="ride"    />,
        <InstrumentKey keyCode="74" keyChar="J" isPlaying={this.state.playBuffer.includes(74)} soundName="snare"   />,
        <InstrumentKey keyCode="75" keyChar="K" isPlaying={this.state.playBuffer.includes(75)} soundName="tom"     />,
        <InstrumentKey keyCode="76" keyChar="L" isPlaying={this.state.playBuffer.includes(76)} soundName="tink"    />,
      </div>
    );
  }

}









